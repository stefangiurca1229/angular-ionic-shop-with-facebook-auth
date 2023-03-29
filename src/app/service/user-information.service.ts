import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "../login/login.service";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root"
})
export class UserInformationservice{
    constructor(
        private http: HttpClient, 
        private loginService: LoginService
    ){}
    postToGroup(accessToken: String,file): Observable<any>{
        return this.http.post(`${environment.facebookGraphApi}364944805723682/photos?access_token=${accessToken}`,file)
    }
    getUserGroups(accessToken: String): Observable<any>{
        return this.http.get(`${environment.facebookGraphApi}me/groups?fields=picture,name&access_token=${accessToken}`)
    }
}