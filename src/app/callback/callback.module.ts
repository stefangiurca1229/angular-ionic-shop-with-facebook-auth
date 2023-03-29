import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { CallBackComponent } from "./callback.component";

@NgModule({
    imports:[
        RouterModule.forChild([
            {
                path: "",
                component: CallBackComponent,
                pathMatch: "full"
            }
        ])
    ],
    declarations: [CallBackComponent]
})
export class CallBackModule{}