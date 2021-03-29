import { Component, OnInit } from '@angular/core';
import { RestaurantServicesService } from '../Services/restaurant-services.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  public cartFoodItems: any = [];
  constructor(private resServices : RestaurantServicesService) { 
    this.addToArray()
    this.setProduct()
  }

  ngOnInit(): void {
    
  }
  addToArray(){
    this.resServices.addToFoodArray()
    }
  setProduct(){
    this.resServices.setFoodProduct()
    this.cartFoodItems = this.resServices.cartFoodItems
    console.log("cart Food Items",this.cartFoodItems)
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
