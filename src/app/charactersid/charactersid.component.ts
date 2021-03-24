import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-charactersid',
  templateUrl: './charactersid.component.html',
  styleUrls: ['./charactersid.component.css']
})
export class CharactersidComponent implements OnInit {

  constructor(private service: ApiServicesService) {
    this.getCharaterById()
   }

  ngOnInit(): void {
  }

  getCharaterById(){
    // this.service.getCharachetrsId().subscribe(res=>
    //   console.log(res))
  }
}
