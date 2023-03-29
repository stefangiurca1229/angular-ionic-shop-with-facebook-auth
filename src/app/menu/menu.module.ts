import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { NbLayoutModule, NbSidebarModule, NbMenuModule, NbButtonModule, NbCardModule, NbIconModule, NbInputModule } from "@nebular/theme";
import { HomePage } from "../home/home.page";
import { FiltreComponent } from "./filtre/filtre.component";
import { MenuComponent } from "./menu.component";
import { MenuRoutingModule } from "./menu.routing.module";

@NgModule({
    imports:[
        CommonModule,
        MenuRoutingModule,
        NbLayoutModule,
        NbSidebarModule,
        NbMenuModule,
        NbButtonModule,
        NbCardModule,
        NbEvaIconsModule,
        NbIconModule,
        NbInputModule,
        RouterModule,
        ReactiveFormsModule,
        IonicModule
    ],
    declarations:[MenuComponent, FiltreComponent]
})
export class MenuModule{

}