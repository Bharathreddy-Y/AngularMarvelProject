import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(private service: ApiServicesService) { 
    // this.getSeries()
  }

  ngOnInit(): void {
  }

  // getSeries(){
  //   this.service.getSeries().subscribe(res=>{
  //     console.log(res)
  //   })
  // }

}
