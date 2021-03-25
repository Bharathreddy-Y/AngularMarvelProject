import { Component, OnInit } from '@angular/core';

const productWineObject = [
  {id:0,productId:123,productName:'Kai Simone',productImage:'/../../assets/WineImages/j-mckinney-zIo9Fbh8qJc-unsplash.jpg',productPrice:10},
  {id:1,productId:124,productName:'Assyrtiko',productImage:'/../../assets/WineImages/lambros-lyrarakis-shheaRqhdas-unsplash.jpg',productPrice:12},
  {id:2,productId:125,productName:'Talamonti',productImage:'/../../assets/WineImages/gabriele-garanzelli-yqAk8NyqN3Y-unsplash.jpg',productPrice:15},
  {id:3,productId:126,productName:'ondule',productImage:'/../../assets/WineImages/the-creative-exchange-EB2lqnX6oGo-unsplash.jpg',productPrice:6},
  {id:4,productId:127,productName:'Nebla',productImage:'/../../assets/WineImages/joel-ambass-0GsUMtnH24s-unsplash.jpg',productPrice:9},
  {id:5,productId:128,productName:'19 Crimes',productImage:'/../../assets/WineImages/marissa-lewis-rK_a-5QsFhw-unsplash.jpg',productPrice:14}
]
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public productArray : any
  constructor() { }

  ngOnInit(): void {
    this.addToArray()
  }
  addToArray(){
    this.productArray = productWineObject
    console.log(this.productArray)
  }
}
