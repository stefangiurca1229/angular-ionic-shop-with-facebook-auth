import { Injectable } from "@angular/core";
import { CanLoad, Route, Router, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { GroupFeedService } from "./group-feed.service";

@Injectable({
    providedIn: "root"
})
export class GroupFeedAuth implements CanLoad{
    constructor(
        private groupFeedService: GroupFeedService,
        private router: Router
    ){}
    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        console.log("on canActivate")
       return this.groupFeedService.group
                                .pipe(
                                    map(
                                        group => {
                                            console.log(group)
                                            if(group == null){
                                                this.router.navigate(["menu","home"]);
                                                return false;
                                            }
                                            return true
                                        }
                                    )
                                )
    }
}