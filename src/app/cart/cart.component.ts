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
  public cartArray:any=[];
  public cartTotal :Number = 0
  public cartSubTotal:number = 0
  public cartTax : number = 0
  public cartFoodTotal :Number = 0
  public cartFoodSubTotal:number = 0
  public cartFoodTax : number = 0
  public showMessageToast=false
  public showToast=false
  public showToastbackcolor=false
  public toastmessage:string=""
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
  onSubmit(){
    this.cartArray = [...this.resServices.totalCart,...this.resServices.totalFoodCart]
    if(this.cartArray.length===0)
    {
      this.toastmessage = "Your Cart is Empty."
      this.showToastbackcolor=true
    }
    else{
      this.toastmessage = "You Payment is Succesfull"
      this.showToastbackcolor=false
    }
    this.showToast=true
    setTimeout(()=>{this.showMessageToast=true},100)
    setTimeout(()=>{this.showToast=false,this.showMessageToast=false},2000);
    // this.cartTotalItems=[]
  }
}
