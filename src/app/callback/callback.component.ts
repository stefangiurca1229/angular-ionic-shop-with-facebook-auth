import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Platform } from "@ionic/angular";
import { take } from "rxjs/operators";
import { LoginService } from "../login/login.service";

@Component({
    selector: "app-callback",
    templateUrl: "./callback.component.html",
    styleUrls: ["./callback.component.scss"]
})
export class CallBackComponent{
    uuid = "empty"
    constructor(private route: ActivatedRoute,
        private router: Router,
        private loginService: LoginService,
        private platform: Platform
        ) {
}

ngOnInit(): void {
// this.loginService.getUuid()
//                     //    .pipe(take(1))
//                        .subscribe(
//                            uuid => {
//                                console.log(uuid)
                               if(this.platform.is("ios")||this.platform.is("android")){
                                   window.close();
                               }else{
                                this.route.queryParams
                                .pipe(take(1))
                                .subscribe(p => {
                                    console.log(p)
                                this.loginService.fetchToken(p.code, p.state).subscribe(data => {
                                  console.log(data.accessToken)
                                })
                                })
                              }
                    //        }
                    //    )
}
}