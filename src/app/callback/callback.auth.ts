import { Injectable } from "@angular/core";
import { CanLoad, Route, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class CallBackAuth implements CanLoad{
    isRedirecting: Boolean = false;
    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this.isRedirecting){
            this.isRedirecting = false;
            return true;
        }
        return false;
    }
}