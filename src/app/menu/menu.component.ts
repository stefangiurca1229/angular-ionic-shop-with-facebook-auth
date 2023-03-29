import { AfterViewInit, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NbMenuItem, NbSidebarService } from "@nebular/theme";
import { take } from "rxjs/operators";

@Component({
    templateUrl:"./menu.component.html",
    styleUrls:["./menu.component.scss"]
})
export class MenuComponent implements AfterViewInit{
  isColapsed = true;
    items: NbMenuItem[] = [
      {
        title: 'home',
        icon: 'home-outline',
        link: '/menu/home'
      }, 
       {
          title: 'Profile',
          icon: 'person-outline',
        },
        {
          title: 'new ad',
          icon: 'plus-outline',
          link: '/menu/new'
        },
        {
          title: 'Privacy Policy',
          icon: { icon: 'checkmark-outline', pack: 'eva' },
        },
        {
          title: 'Logout',
          icon: 'unlock-outline',
        },
      ];
    constructor(
        private sidebarService: NbSidebarService,
        private router: Router
    ){
    }
  ngAfterViewInit(): void {
    this.sidebarService.collapse();
  }
    toggle(){
        this.isColapsed = !this.isColapsed;
        this.sidebarService.toggle();
    }
    login(){
      this.router.navigate(["facebook-login"])
    }
}