import { Component, OnInit, Output,EventEmitter } from '@angular/core';
// import * as EventEmitter from 'node:events';<

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  
  public arr : any=[]
  // public childData :string= ''
  constructor() {
    this.arr=[{id:0,name:"Bharath"}]
    
    // console.log(this.arr)
   }

  ngOnInit(): void {
    setTimeout(()=>{
      
    },3000)
    
  }
  childData(event:any)
  {
    console.log(event)
  }

}
