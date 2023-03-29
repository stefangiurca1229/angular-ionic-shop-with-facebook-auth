import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Platform } from "@ionic/angular";
import { BehaviorSubject, Observable } from "rxjs";
import { CallBackComponent } from "../callback/callback.component";
import { v4 as uuidv4 } from "uuid";
import { environment } from "src/environments/environment";
import { Browser } from "@capacitor/browser";
import { take } from "rxjs/operators"
import { Preferences } from '@capacitor/preferences';

@Injectable({
    providedIn: "root"
})
export class LoginService{
 
    public accessToken: BehaviorSubject<String> = new BehaviorSubject(null);

    constructor(
        private http: HttpClient,
        private platform: Platform
    ){}
    login() {
     
      if(!this.platform.is("android") && !this.platform.is("ios")){
       window.open(`${environment.localServer}/oauth2/authorization/facebook`,"_self");
      }
       else{
       this.sendUuid()
           .pipe(take(1))
           .subscribe(
               res => {
                     console.log(res)
                     Browser.open({url: `${environment.localServer}/oauth2/authorization/facebook`});
               }
           )         
       }
      }

    fetchToken(code, state): Observable<any> {
        return this.http.get(`${environment.localServer}/login/oauth2/code/facebook` + '?code=' + code + '&state=' + state);
      }

    sendUuid():Observable<any> {
        let uuid = uuidv4()
        Preferences.set({
          key: "uuid",
          value: uuid
        })
        return this.http.get(`${environment.localServer}/uuid?uuid=${uuid}`);
      }
}