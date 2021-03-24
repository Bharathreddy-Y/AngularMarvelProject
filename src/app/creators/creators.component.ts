import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.css']
})
export class CreatorsComponent implements OnInit {

  constructor(private service: ApiServicesService) { 
    // this.getCreators()
  }

  ngOnInit(): void {
  }

  // getCreators(){
  //   this.service.getCreators().subscribe(res=>{
  //     console.log(res)
  //   })
  // }
}
