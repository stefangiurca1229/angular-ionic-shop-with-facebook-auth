import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FacebookLoginComponent } from "./facebook-login.component";

@NgModule({
    imports:[
        RouterModule.forChild([
            {
                path:"",
                component: FacebookLoginComponent,
                pathMatch: "full"
            }
        ])
    ],
    declarations: [FacebookLoginComponent]
})
export class FacebookLoginModule{}