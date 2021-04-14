import { Component, OnInit } from '@angular/core';
import { RestaurantServicesService } from '../Services/restaurant-services.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public drinksList : any = [{name:"wine"},{name:"beer"}]
  public foodList : any = [{name:"Biryani"},{name:"Roti"}]
  showDrinksBeer: boolean = false
  showDrinksWine : boolean = true;

  showFoodBiryani : boolean = true;
  showFoodRoti : boolean = false;
  
  showDrinks : boolean = true;
  showFood : boolean = false;
  showDessert : boolean =false;
  public SelectedCategory="wine";
  public SelectedFoodCategory="Biryani";
  
  drinksBackColor = true;
  foodBackColor = false;
  dessertBackColor =false;
  constructor(private resServices : RestaurantServicesService) {
   }

  ngOnInit(): void {
  }
  drinkSelect(e:any)
  {
    if(e==="beer"){
      this.resServices.showDrinksBeer = true
      this.showDrinksBeer = this.resServices.showDrinksBeer

      this.resServices.showDrinksWine = false
      this.showDrinksWine = this.resServices.showDrinksWine
      // console.log("Beer",this.resServices.showDrinksBeer)
    }
    if(e==="wine"){
      this.resServices.showDrinksBeer = false
      this.showDrinksBeer = this.resServices.showDrinksBeer

      this.resServices.showDrinksWine = true
      this.showDrinksWine = this.resServices.showDrinksWine
      // console.log("Wine",this.resServices.showDrinksWine)
    }
  }
  foodSelect(e:any)
  {
    if(e==="Biryani"){
      this.resServices.showFoodBiryani = true
      this.showFoodBiryani = this.resServices.showFoodBiryani

      this.resServices.showFoodRoti = false
      this.showFoodRoti = this.resServices.showFoodRoti
      // console.log("Beer",this.resServices.showDrinksBeer)
    }
    if(e==="Roti"){
      this.resServices.showFoodBiryani = false
      this.showFoodBiryani = this.resServices.showFoodBiryani

      this.resServices.showFoodRoti = true
      this.showFoodRoti = this.resServices.showFoodRoti
      // console.log("Wine",this.resServices.showDrinksWine)
    }
  }

  ShowDrinks(){
    this.resServices.showDrinks = true
    this.showDrinks = this.resServices.showDrinks
    this.drinksBackColor = true
    this.resServices.showFood = false
    this.showFood = this.resServices.showFood
    this.foodBackColor = false
    this.resServices.showDessert = false
    this.showDessert = this.resServices.showDessert
    this.dessertBackColor = false;
  }
  ShowFood(){
    this.resServices.showDrinks = false
    this.showDrinks = this.resServices.showDrinks
    this.drinksBackColor= false;
    this.resServices.showFood = true
    this.showFood = this.resServices.showFood
    this.foodBackColor = true
    this.resServices.showDessert = false
    this.showDessert = this.resServices.showDessert
    this.dessertBackColor = false
  }
  ShowDessert(){
    this.resServices.showDrinks = false
    this.showDrinks = this.resServices.showDrinks
    this.drinksBackColor= false;
    this.resServices.showFood = false
    this.showFood = this.resServices.showFood
    this.foodBackColor = false
    this.resServices.showDessert = true
    this.showDessert = this.resServices.showDessert
    this.dessertBackColor = true
  }
}
