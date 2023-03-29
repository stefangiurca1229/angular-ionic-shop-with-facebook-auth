import { Component, OnInit } from "@angular/core";
import { Feed } from "src/interfaces/feed.interface";
import { Group } from "src/interfaces/group.interface";
import { LoginService } from "../login/login.service";
import { UserInformationservice } from "../service/user-information.service";
import { GroupFeedService } from "./group-feed.service";

@Component({
    selector: "group-feed",
    templateUrl: "group-feed.component.html",
    styleUrls: ["group-feed.component.scss"]
})
export class GroupFeedComponent implements OnInit{
   group: Group
   accessToken: String
   groupFeed: Feed[]
   comments: Comment[]
   isModalOpen = false;

   public constructor(
       private groupFeedService: GroupFeedService,
       private loginService: LoginService,
       private userInformationService: UserInformationservice
   ){}

    ngOnInit(): void {
        this.loginService.accessToken.subscribe(
            accessToken => {
                this.accessToken = accessToken;
                this.groupFeedService.group.subscribe(
                    group => {
                            this.group = group;
                            this.groupFeedService.getGroupFeed(group,accessToken).subscribe(
                                feed => {
                                    console.log(feed)
                                    this.groupFeed = feed;
                                        }
                                    )
                        }
                )
                    }
        )
    }

    Open(feed: Feed) {
    this.comments = feed.comments == null ? [] : feed.comments.data
      this.isModalOpen = true;
    }
    Close(){
        this.isModalOpen = false;
    }

    onFileChanged(file){
       const reader = new FileReader();
       reader.onload = (e)=>{
        var arrayBuffer = e.target.result;
        // And blob object of the file
        var blob = new Blob([arrayBuffer], { type: file.target.files[0].type});
        console.log(blob)
        var data = new FormData();
        data.append("source",blob);
        data.append("caption","just a description")
        console.log(data)
        this.userInformationService.postToGroup(this.accessToken, data)
        .subscribe(
          res => {
            console.log("post response");
            console.log(res)
          }
        )
       }
       reader.readAsArrayBuffer(file.target.files[0])
    //   const uploadData = new FormData();
    //   uploadData.append('source', file.target.files[0]);
    //   console.log(uploadData)
        // this.userInformationService.postToGroup(this.accessToken, uploadData)
        // .subscribe(
        //   res => {
        //     console.log("post response");
        //     console.log(res)
        //   }
        // )
    }

    onUpload(){
        // this.userInformationService.postToGroup(this.accessToken)
        // .subscribe(
        //   res => {
        //     console.log("post response");
        //     console.log(res)
        //   }
        // )
    }
}