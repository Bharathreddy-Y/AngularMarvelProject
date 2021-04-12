import { Component, OnInit } from '@angular/core';
import { RestaurantServicesService } from '../Services/restaurant-services.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {
  public cartDrinkItems: any = [];
  constructor(private resServices : RestaurantServicesService) {
   }

  ngOnInit(): void {
    this.addToArray()
    this.setProduct()
  }
  addToArray(){
    this.resServices.addToArray()
    }
  setProduct(){
    this.resServices.setProduct()
    this.cartDrinkItems = [...this.resServices.cartDrinkItems]
  }
  Increment(id:any){
    this.resServices.Increment(id)
  }
  addToCart(id:any){
    this.resServices.addToCart(id)
    
  }
  Decrement(id:any)
  {
    this.resServices.Decrement(id)
  }
}
