import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServicesService } from '../api-services.service';
import { dataclass } from '../Modules/DataModule';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  public SeriesById : dataclass = new dataclass()
  public routeId:any
  public title:any
  constructor(private service : ApiServicesService,private Ar : ActivatedRoute) {
   }

  ngOnInit(): void {
    this.routeId=this.Ar.snapshot.paramMap.get("id");
    let charById = this.service.getSeriesById(this.routeId)
    charById.subscribe(res=>{
      this.SeriesById.marvel = res.data.results;
      this.title = res.data.results[0].title
      console.log("id",this.SeriesById.marvel)
    })
  }
}
