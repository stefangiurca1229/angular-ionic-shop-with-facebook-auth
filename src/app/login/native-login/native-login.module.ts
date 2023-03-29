import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NativeLoginComponent } from "./native-login.component";

@NgModule({
    imports: [
        RouterModule.forChild([{
            path: "",
            component: NativeLoginComponent,
            pathMatch: "full"
        }])
    ],
    declarations: [
        NativeLoginComponent
    ]
})
export class NativeLoginModule{}