import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NavController, Platform } from "@ionic/angular";
import { LoginService } from "../login.service";
import { NativeLoginService } from "./native-login.service";

@Component({
    selector: "native-login-app",
    templateUrl: "./native-login.component.html",
    styleUrls: ["./native-login.component.scss"]
})
export class NativeLoginComponent {
    constructor(
        private route: ActivatedRoute,
        private nativeLoginService: NativeLoginService,
        private loginService: LoginService,
        private navCtrl: NavController
    ){}

    // ngOnInit(): void {
    //     this.route.queryParams
    //     .subscribe(
    //         params =>{
    //             if(params.uuid){
    //                this.nativeLoginService.setUuid(params.uuid);
    //                this.loginService.login();
    //             }
    //         }
    //     )
    // }

    close(){
        window.top.close()
    }
    
}