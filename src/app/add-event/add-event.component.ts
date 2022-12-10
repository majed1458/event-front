import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../services/event-service.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  event = {
    id: "",
    address: "",
    title: "",
    date: "",
    description: ""
  }
  image: any;
  finished: boolean = false


  constructor(private eventser: EventServiceService) { }
  ngOnInit(): void {

  }

  selectImage(e: any) {
    this.image = e.target.files[0]
  }

  addEvent() {
    let formdata = new FormData()
    formdata.append("event_img", this.image)



    this.eventser.addTask({
      _id: "",
      Image: "",
      Title: this.event.title,
      Address: this.event.address,
      DateEven: this.event.date,
      Description: this.event.description
    })
      .subscribe((data: any) => {
        console.log(data)
      this.eventser.addimage(data.newEvent._id, formdata).subscribe(even=>{
        console.log(even)
      })

      });
  }
}
