import { Component, OnInit,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-detailscomponent',
  templateUrl: './detailscomponent.component.html',
  styleUrls: ['./detailscomponent.component.css']
})
export class DetailscomponentComponent implements OnInit {

  constructor() { 
  }
  showdetailsmodule: boolean=true
  @Output() showEmitter = new EventEmitter<boolean>()
  ngOnInit(): void {
  }
  detailsmodule(){
    this.showdetailsmodule=false
    this.showEmitter.emit(this.showdetailsmodule)
  }

}
