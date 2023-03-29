import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
    FacebookLogin,
  } from '@capacitor-community/facebook-login';
import { environment } from "src/environments/environment";

@Component({
    templateUrl:"./facebook-login.component.html",
    styleUrls:["./facebook-login.component.scss"]
})
export class FacebookLoginComponent implements OnInit{

    constructor(private router: Router) { }

    ngOnInit() {
        FacebookLogin.initialize({appId:`${environment.appId}`}).then(
          ()=>{
            this.getCurrentState();
          }
        )
    }
    async getCurrentState() {
      const result = await FacebookLogin.getCurrentAccessToken();
      try {
        console.log(result);
        if (result && result.accessToken) {
          let user = { token: result.accessToken.token, userId: result.accessToken.userId }
        }
      } catch (e) {
        console.log(e)
      }
    }
  
    async SignIn(): Promise<void> {
      const FACEBOOK_PERMISSIONS = ['public_profile', 'email'];
  
      const result = await FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });
      if (result && result.accessToken) {
        let user = { token: result.accessToken.token, userId: result.accessToken.userId }
      }
    }
    login(){
        console.log("facebook login");
    }
}