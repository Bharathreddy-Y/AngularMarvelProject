import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServicesService } from '../api-services.service';
import { dataclass } from '../Modules/DataModule';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  public StoriesById : dataclass = new dataclass()
  public routeId:any
  constructor(private service : ApiServicesService,private Ar : ActivatedRoute) {
   }

  ngOnInit(): void {
    this.routeId=this.Ar.snapshot.paramMap.get("id");
    let charById = this.service.getStoriesById(this.routeId)
    charById.subscribe(res=>{
      this.StoriesById.marvel = res.data.results;
      console.log("id",this.StoriesById.marvel)
    })
  }
}
