import { Component, OnInit } from '@angular/core';
import { RestaurantServicesService } from '../Services/restaurant-services.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  public cartTotalItems: any = [];
  public cartTotal :Number = 0
  public cartSubTotal:number = 0
  public cartTax : number = 0
  constructor(private resServices : RestaurantServicesService) {
    // this.resServices.getData().subscribe(item =>{
    //   console.log("nerovr",item)
    //   item.forEach((items:any)=>{
    //     let subTotal = 0;
    //     subTotal += items.total;
    //     let tempTax = subTotal * 0.1;
    //     const Tax = parseFloat(tempTax.toFixed(2));
    //     const total = subTotal + Tax;
    //     item.cartSubTotal = subTotal;
    //     item.cartTax = Tax;
    //     item.cartTotal = total;
    //     
    //   });
    // this.cartTotal += item.cartTotal
    //     this.cartSubTotal = item.cartSubTotal
    //     this.cartTax = item.cartTax
        
    //   console.log("rngriuen",this.cartSubTotal)
    // })
   }

  ngOnInit(){
    
    this.cart()
  }
  cart(){
    // console.log("vrnehiuvbfrnneriobneoi",this.resServices.getData())
    // console.log(this.cartTotal)
    this.cartTotalItems = this.resServices.totalCart
    this.resServices.totalCart.forEach((item:any)=>{
      this.cartTotal += item.cartTotal
    })
    console.log(this.resServices.totalCart)
  }
}
