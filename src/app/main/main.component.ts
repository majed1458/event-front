import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../services/event-service.service';
import { Event } from '../models/eventModel';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  events:Event[]=[];
  constructor(private _eventServices: EventServiceService) { }

  ngOnInit(): void {
    this._eventServices.getEvents().subscribe(res=>{
      console.log("response",res.items)
      this.events=res.items

    })
    
  }

  getEvents(): void {
    this.events = this._eventServices.events
  }
  delete(id:string){
    this.events = this.events.filter(event => event._id !== id);
    this._eventServices.deleteTask(id).subscribe(data => this.events.filter(event => {
      return event !== data;
  }))
  }
}
