import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  constructor(private service: ApiServicesService) { 
    // this.getComics()
  }

  ngOnInit(): void {
  }
  // getComics(){
  //   this.service.getComics().subscribe(res=>{
  //     // console.log(res)
  //   })
  // }
}
