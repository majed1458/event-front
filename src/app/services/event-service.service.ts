import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { mergeMap, Observable } from 'rxjs';
import { map } from "rxjs/operators";

import { AjoutEvent, Event ,Events} from '../models/eventModel';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
events:any=[]
  constructor(private http : HttpClient) { }
  private url="http:/localhost:8080/api/"

   getEvents():Observable<Events>{
    
    return this.http.get<Events>("http://localhost:8080/api/event/allEvents")
  }
  addTask(event: any):Observable<any>{
    return this.http.post<any>("http://localhost:8080/api/event/create", event, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    })
}

addimage(id: string,img:any):Observable<any>{
    return this.http
        .put("http://localhost:8080/api/event/addImmage" + '/' + id, img)
        .pipe(map((response: any) => response));
}

deleteTask(id:string){
    return this.http.delete("http://localhost:8080/api/event/delete" + '/' + id)
    .pipe(map((res:any) => res));
}

}
