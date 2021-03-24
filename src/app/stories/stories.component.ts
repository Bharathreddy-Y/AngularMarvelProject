import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  constructor(private service: ApiServicesService) { 
    // this.getStories()
  }

  ngOnInit(): void {
  }
  // getStories(){
  //   this.service.getStories().subscribe(res=>{
  //     console.log(res)
  //   })
  // }
}
