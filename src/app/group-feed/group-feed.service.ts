import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Feed } from "src/interfaces/feed.interface";
import { Group } from "src/interfaces/group.interface";

@Injectable({
    providedIn: "root"
})
export class GroupFeedService{
    group: BehaviorSubject<Group> = new BehaviorSubject(null);
    public constructor(
        private http: HttpClient
    ){}
    public getGroupFeed(group: Group, accessToken: String): Observable<Feed[]>{
        return this.http.get<Feed[]>(`${environment.facebookGraphApi}${group.id}/feed?fields=full_picture,message,reactions,comments,updated_time,from&access_token=${accessToken}`)
                   .pipe(
                       map(
                           (groupFeed: any) => {
                               console.log(groupFeed)
                               groupFeed.data.forEach(feed => {
                                feed.poz_reactions = 0;
                                feed.negative_reactions = 0;
                                console.log(feed)
                                if(feed.reactions)
                                feed.reactions.data.forEach(
                                    react => {
                                        if(react.type == "ANGRY")
                                        feed.negative_reactions++;
                                        else
                                        feed.poz_reactions++;
                                    }
                                )
                               });
                               groupFeed.data.pop()
                               return groupFeed.data
                           }
                       ),
                       catchError(
                           err => {
                               console.log(err)
                               return err
                            }
                       )
                   )
    }
}