import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CallBackAuth } from './callback/callback.auth';

const routes: Routes = [
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule)
  },
  {
    path: "login",
    loadChildren: () => import("./login/login.module").then(m => m.HomePageModule)
  },
  {
    path: "web-login",
    loadChildren: () => import("./login/native-login/native-login.module").then(m => m.NativeLoginModule)
  },
  {
     path: "facebook-login",
     loadChildren: () => import("./facebook-login/facebook-login.module").then(m => m.FacebookLoginModule)
  },
  {
   path:"callback",
  //  canLoad: [CallBackAuth],
   loadChildren: () => import("./callback/callback.module").then(m => m.CallBackModule)
  },
  {
    path: '',
    redirectTo: 'menu/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
