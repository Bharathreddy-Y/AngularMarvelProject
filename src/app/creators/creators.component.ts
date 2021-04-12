import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServicesService } from '../api-services.service';
import { dataclass } from '../Modules/DataModule';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.css']
})
export class CreatorsComponent implements OnInit {

  public CreatorsById : dataclass = new dataclass()
  public routeId:any
  constructor(private service : ApiServicesService,private Ar : ActivatedRoute) {
   }

  ngOnInit(): void {
    this.routeId=this.Ar.snapshot.paramMap.get("id");
    let charById = this.service.getCreatorsById(this.routeId);
    charById.subscribe(res=>{
      this.CreatorsById.marvel = res.data.results;
      console.log("id",this.CreatorsById.marvel)
    })
  }
}
