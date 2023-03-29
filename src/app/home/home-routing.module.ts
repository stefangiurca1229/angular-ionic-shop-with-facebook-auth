import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupFeedAuth } from '../group-feed/group-feed.auth';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    pathMatch: "full"
  },
  {
    path: "group-feed",
    canLoad: [GroupFeedAuth],
    loadChildren: () => import("../group-feed/group-feed.module").then(m => m.GroupFeedModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
