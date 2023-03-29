import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class NativeLoginService{
    private uuid: BehaviorSubject<String> = new BehaviorSubject(null);
    public setUuid(uuid: String): void{
        this.uuid.next(uuid);
    }
    public getUuid(): Observable<String>{
        return this.uuid;
    }
}