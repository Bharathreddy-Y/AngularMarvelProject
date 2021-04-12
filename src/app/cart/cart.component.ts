import { Component, OnInit } from '@angular/core';
import { RestaurantServicesService } from '../Services/restaurant-services.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  public cartTotalItems: any = [];
  public cartFoodTotalItems: any = [];
  public cartTotal :Number = 0
  public cartSubTotal:number = 0
  public cartTax : number = 0
  public cartFoodTotal :Number = 0
  public cartFoodSubTotal:number = 0
  public cartFoodTax : number = 0
  constructor(private resServices : RestaurantServicesService) {
    this.resServices.getData().subscribe(item =>{
      this.cartTotalItems=[...resServices.totalCart]
      item.forEach((items:any)=>{  
        this.cartSubTotal = items.cartSubTotal
        this.cartTax = items.cartTax
        this.cartTotal =items.cartTotal
      });
    })
    this.resServices.getFoodData().subscribe(item =>{
      this.cartFoodTotalItems=[...resServices.totalFoodCart]
      item.forEach((items:any)=>{  
        this.cartFoodSubTotal = items.cartSubTotal
        this.cartFoodTax = items.cartTax
        this.cartFoodTotal =items.cartTotal
      });
    })
   }

  ngOnInit(){
  }
}
