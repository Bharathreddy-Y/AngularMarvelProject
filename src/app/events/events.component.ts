import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private service: ApiServicesService) { 
    // this.getEvents()
  }

  ngOnInit(): void {
  }

  // getEvents(){
  //   this.service.getEvents().subscribe(res=>{
  //     console.log(res)
  //   })
  // }
}
