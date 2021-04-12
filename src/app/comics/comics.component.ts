import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServicesService } from '../api-services.service';
import { dataclass } from '../Modules/DataModule';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  public ComicsById : dataclass = new dataclass()
  public routeId:any
  constructor(private service : ApiServicesService,private Ar : ActivatedRoute) {
   }

  ngOnInit(): void {
    this.routeId=this.Ar.snapshot.paramMap.get("id");
    let charById = this.service.getComicsById(this.routeId)
    charById.subscribe(res=>{
      this.ComicsById.marvel = res.data.results;
      console.log("id",this.ComicsById.marvel)
    })
  }
}
