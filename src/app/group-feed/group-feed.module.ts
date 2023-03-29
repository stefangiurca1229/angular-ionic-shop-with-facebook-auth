import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { NbLayoutModule, NbSidebarModule, NbMenuModule, NbButtonModule, NbCardModule, NbIconModule, NbListModule } from "@nebular/theme";
import { GroupFeedAuth } from "./group-feed.auth";
import { GroupFeedComponent } from "./group-feed.component";

@NgModule({
    imports: [
    CommonModule,
    RouterModule.forChild([
        {
            path: "",
            component: GroupFeedComponent
        }
    ]),
    FormsModule,
    IonicModule,
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule,
    NbButtonModule,
    NbCardModule,
    NbEvaIconsModule,
    NbIconModule,
    NbListModule,
    NbCardModule
    ],
    declarations: [GroupFeedComponent]
})
export class GroupFeedModule{}