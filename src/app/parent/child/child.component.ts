import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() arr:any
  @Output() child = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log("this is child",this.arr)
  }
  sendData(){
    let mess = "child data"
    this.child.emit(mess)
  }

}
