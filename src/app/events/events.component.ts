import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServicesService } from '../api-services.service';
import { dataclass } from '../Modules/DataModule';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public EventsById : dataclass = new dataclass()
  public routeId:any
  constructor(private service : ApiServicesService,private Ar : ActivatedRoute) {
   }

  ngOnInit(): void {
    this.routeId=this.Ar.snapshot.paramMap.get("id");
    let charById = this.service.getEventsById(this.routeId)
    charById.subscribe(res=>{
      this.EventsById.marvel = res.data.results;
      console.log("id",this.EventsById.marvel)
    })
  }
}
