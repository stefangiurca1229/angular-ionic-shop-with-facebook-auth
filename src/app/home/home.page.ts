import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from 'src/interfaces/group.interface';
import { GroupFeedService } from '../group-feed/group-feed.service';
import { LoginService } from '../login/login.service';
import { UserInformationservice } from '../service/user-information.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  demoCardsArray: Number[] = [1,1,1,1,1,1]
  groups: Group[]
  accessToken: String

  constructor(
    private userInformation: UserInformationservice,
    private loginService: LoginService,
    private router: Router,
    private groupFeedService: GroupFeedService
  ) {
  }

  ngOnInit(){
    this.loginService.accessToken.subscribe(
      accessToken => {
        if(accessToken){
        this.accessToken = accessToken;
        this.userInformation.getUserGroups(accessToken)
                            .subscribe(
                              res => {
                                this.groups = res.data
                              }
                            )
        }
      }
    )
  }

  public accessGroup(group: Group){
    this.groupFeedService.group.next(group);
    this.router.navigate(["menu","home","group-feed"])
  }

}
