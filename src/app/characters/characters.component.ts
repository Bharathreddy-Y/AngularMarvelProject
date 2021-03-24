import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private http : HttpClient, private ApiServicesService: ApiServicesService) { 
    // this.getConfig();
  }

  ngOnInit(): void {
  }
  // getConfig(){
  //   this.ApiServicesService.getConfig().subscribe((res: any[])=>{
  //     console.log(res)
  //   })
  // }
}
