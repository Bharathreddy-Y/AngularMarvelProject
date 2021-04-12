import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ApiServicesService } from '../api-services.service';
import { dataclass } from '../Modules/DataModule';

@Component({
  selector: 'app-charactersid',
  templateUrl: './charactersid.component.html',
  styleUrls: ['./charactersid.component.css']
})
export class CharactersidComponent implements OnInit {

  public CharactersById : dataclass = new dataclass()
  public routeId:any
  constructor(private service : ApiServicesService,private Ar : ActivatedRoute) {
   }

  ngOnInit(): void {
    this.routeId=this.Ar.snapshot.paramMap.get("id");
    let charById = this.service.getConfigById(this.routeId)
    charById.subscribe(res=>{
      this.CharactersById.marvel = res.data.results;
      console.log(this.CharactersById.marvel)
    })
  }
}
