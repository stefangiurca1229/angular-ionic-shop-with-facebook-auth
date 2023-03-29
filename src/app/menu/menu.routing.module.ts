import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePage } from "../home/home.page";
import { MenuComponent } from "./menu.component";

const routes: Routes = [
    {
        path: '',
        component: MenuComponent,
        children:[
            {
                path: "home",
                loadChildren: ()=>import('../home/home.module').then(m=>m.HomePageModule)
            },
            {
                path: "new",
                loadChildren: ()=>import('../new-ad/new-ad.module').then(m=>m.NewAdModule)
            }
        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    declarations:[],
    exports:[]
})
export class MenuRoutingModule{

}