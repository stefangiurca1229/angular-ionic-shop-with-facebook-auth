import { Component, OnInit} from "@angular/core";
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";
import { Platform } from "@ionic/angular";
import { environment } from "src/environments/environment";
import { LoginService } from "./login.service";
import { Browser } from "@capacitor/browser";
import { take } from "rxjs/operators";
import { FacebookLogin } from "@capacitor-community/facebook-login";

@Component({
    selector: "login-component",
    templateUrl: "login.component.html",
    styleUrls: ["login.component.scss"]
})
export class LoginComponent implements OnInit{

    constructor(
      private router: Router,
      private route: ActivatedRoute,
      private loginService: LoginService,
      private platform: Platform
      ) { }

      ngOnInit(): void {
        // console.log(window.location)
        // this.route.queryParams
        // .subscribe(
        //     params =>{
        //         if(params.uuid){
        //            this.loginService.setUuid(params.uuid);
        //            this.loginService.login();
        //         }
        //     }
        // )
    }
    // signIn(){
    //  this.loginService.login();
    // }

    navigate(){
      Browser.open({url: `https://desktop-t9jngtv.lan:8100/web-login`})
      // let logWin = window.open(`https://desktop-t9jngtv.lan:8100/web-login`,'_system','popup')
      // logWin.addEventListener("beforeunload", () =>{
      //   console.log("window closed!")
      // })
    }
  
    async signIn(): Promise<void> {
      const FACEBOOK_PERMISSIONS = ['public_profile', 'email', "publish_to_groups", "groups_access_member_info", "user_managed_groups"];
      const result = await FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });
      if (result && result.accessToken) {
          console.log(result.accessToken.token)
        let accessToken = result.accessToken.token;
      }
    if(this.platform.is("android") || this.platform.is("ios")){
      this.loginService.sendUuid()
                       .pipe(take(1))
                       .subscribe(
                         res => console.log(res)
                       )
    }
    // this.loginService.setUuid("dfsdfsdfs")
      // this.loginService.login();
    }
    async logOut(){
      // await FacebookLogin.logout();
      // this.loginService.accessToken.next(null);
    }
  }