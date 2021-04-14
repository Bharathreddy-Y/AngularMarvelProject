import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestaurantServicesService implements OnInit {
  public updateCartTotal: any;
  public productArray: any;
  public productFoodArray: any;
  constructor() {}
  showDrinks: boolean = true;
  showFood: boolean = false;
  showDessert: boolean = false;

  showFoodBiryani: boolean = true;
  showFoodRoti: boolean = true;
  showDrinksWine: boolean = true;
  showDrinksBeer: boolean = false;
  public cart: any = [];
  public item: any = [];
  
  public totalCart: any = [];

  public Foodcart: any = [];
  public Fooditem: any = [];
  public totalFoodCart: any = [];

  public cartDrinkItems: any = [];
  public cartFoodItems: any = [];
  public cartSubTotal:number=0;
  public cartTax:number=0;
  public cartTotal:number=0;
  public data:any=[]
  public dataFood:any=[]
  public c:number=0;
  ngOnInit() {}

  Wine() {
    const productWine = [
      {
        id: 0,
        productId: 123,
        productName: 'Kai Simone',
        productImage:
          '/../../assets/WineImages/j-mckinney-zIo9Fbh8qJc-unsplash.jpg',
        productPrice: 10,
        count: 0,
        total: 0,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
      },
      {
        id: 1,
        productId: 124,
        productName: 'Assyrtiko',
        productImage:
          '/../../assets/WineImages/lambros-lyrarakis-shheaRqhdas-unsplash.jpg',
        productPrice: 12,
        count: 0,
        total: 0,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
      },
      {
        id: 2,
        productId: 125,
        productName: 'Talamonti',
        productImage:
          '/../../assets/WineImages/gabriele-garanzelli-yqAk8NyqN3Y-unsplash.jpg',
        productPrice: 15,
        count: 0,
        total: 0,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
      },
      {
        id: 3,
        productId: 126,
        productName: 'ondule',
        productImage:
          '/../../assets/WineImages/the-creative-exchange-EB2lqnX6oGo-unsplash.jpg',
        productPrice: 6,
        count: 0,
        total: 0,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
      },
      {
        id: 4,
        productId: 127,
        productName: 'Nebla',
        productImage:
          '/../../assets/WineImages/joel-ambass-0GsUMtnH24s-unsplash.jpg',
        productPrice: 9,
        count: 0,
        total: 0,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
      },
      {
        id: 5,
        productId: 128,
        productName: '19 Crimes',
        productImage:
          '/../../assets/WineImages/marissa-lewis-rK_a-5QsFhw-unsplash.jpg',
        productPrice: 14,
        count: 0,
        total: 0,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
      },
    ];
    return productWine;
  }
  Beer() {
    const productBeer = [
      {
        id: 6,
        productId: 129,
        productName: 'Deep Dark Sea',
        productImage:
          '/../../assets/BeerImages/jakub-dziubak-5lZhD2qQ2SE-unsplash.jpg',
        productPrice: 10,
        count: 0,
        total: 0,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
      },
      {
        id: 7,
        productId: 130,
        productName: 'Sol',
        productImage:
          '/../../assets/BeerImages/david-pennington-TqvqPyf15_k-unsplash.jpg',
        productPrice: 12,
        count: 0,
        total: 0,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
      },
      {
        id: 8,
        productId: 131,
        productName: 'Mythos',
        productImage:
          '/../../assets/BeerImages/yannis-papanastasopoulos-8RRPagVz9_Y-unsplash.jpg',
        productPrice: 15,
        count: 0,
        total: 0,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
      },
      {
        id: 9,
        productId: 132,
        productName: 'Mythos strong',
        productImage:
          '/../../assets/BeerImages/nick-karvounis-UQxFepiJBPE-unsplash.jpg',
        productPrice: 6,
        count: 0,
        total: 0,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
      },
      {
        id: 10,
        productId: 133,
        productName: 'Pacifico',
        productImage:
          '/../../assets/BeerImages/tom-rogerson-zXl4QWaADLQ-unsplash.jpg',
        productPrice: 9,
        count: 0,
        total: 0,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
      },
      {
        id: 11,
        productId: 134,
        productName: 'Bavaria',
        productImage:
          '/../../assets/BeerImages/lloyd-dirks-nf_o8AHiyK4-unsplash.jpg',
        productPrice: 14,
        count: 0,
        total: 0,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
      },
    ];
    return productBeer;
  }
  Biryani() {
    const productBiryani = [
      {
        id: 12,
        productId: 135,
        productName: 'Veg Biryani',
        productImage:
          '/../../assets/FoodImages/alice-pasqual-a2scGjpiI5E-unsplash.jpg',
        productPrice: 10,
        count: 0,
        total: 0,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
      },
      {
        id: 13,
        productId: 136,
        productName: 'Chicken Biryani',
        productImage:
          '/../../assets/FoodImages/drew-taylor-jFu2L04tMBc-unsplash - Copy.jpg',
        productPrice: 12,
        count: 0,
        total: 0,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
      },
      {
        id: 14,
        productId: 137,
        productName: 'Mutton Biryani',
        productImage:
          '/../../assets/FoodImages/emiliano-vittoriosi-OFismyezPnY-unsplash - Copy.jpg',
        productPrice: 15,
        count: 0,
        total: 0,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
      },
    ];
    return productBiryani;
  }
  Roti() {
    const productRoti = [
      {
        id: 15,
        productId: 138,
        productName: 'Roti',
        productImage:
          '/../../assets/WineImages/j-mckinney-zIo9Fbh8qJc-unsplash.jpg',
        productPrice: 10,
        count: 0,
        total: 0,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
      },
      {
        id: 16,
        productId: 139,
        productName: 'Butter Naan',
        productImage:
          '/../../assets/WineImages/lambros-lyrarakis-shheaRqhdas-unsplash.jpg',
        productPrice: 12,
        count: 0,
        total: 0,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
      },
      {
        id: 17,
        productId: 140,
        productName: 'Tandoori Roti',
        productImage:
          '/../../assets/WineImages/gabriele-garanzelli-yqAk8NyqN3Y-unsplash.jpg',
        productPrice: 15,
        count: 0,
        total: 0,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
      },
    ];
    return productRoti;
  }
  addToArray() {
    if (this.showDrinksBeer) {
      this.productArray = this.Beer();
      return this.productArray;
    }
    if (this.showDrinksWine) {
      this.productArray = this.Wine();
      return this.productArray;
    }
  }
  addToFoodArray() {
    if (this.showFoodBiryani) {
      this.productFoodArray = this.Biryani();
      return this.productFoodArray;
    }
    if (this.showFoodRoti) {
      this.productFoodArray = this.Roti();
      return this.productFoodArray;
    }
  }
  setProduct() {
    this.cartDrinkItems= [...this.productArray]
    console.log("product Items",this.totalCart)
    console.log("cart Drink Items",this.cartDrinkItems)
  }
  setFoodProduct() {
      this.cartFoodItems = [...this.productFoodArray];
  }
  Increment(id: any) {
    this.addToCart(id);
    let tempCart = [...this.cartDrinkItems];
    const tempCartIndex = tempCart.indexOf(
      this.cartDrinkItems.find((t: any) => t.id === id)
    );
    const productCart = tempCart[tempCartIndex];
    if (productCart) {
      productCart.count = productCart.count + 1;
      productCart.Price = productCart.productPrice * productCart.count;
      productCart.total = productCart.Price;
      console.log(productCart.count, productCart.Price);
      this.addTotals();
      {
        this.item = [...tempCart];
      }
    }
    

    let tempFoodCart = [...this.cartFoodItems];
    const tempFoodCartIndex = tempFoodCart.indexOf(
      this.cartFoodItems.find((t: any) => t.id === id)
    );
    const productFoodCart = tempFoodCart[tempFoodCartIndex];
    if (productFoodCart) {
      productFoodCart.count = productFoodCart.count + 1;
      productFoodCart.Price = productFoodCart.productPrice * productFoodCart.count;
      productFoodCart.total = productFoodCart.Price;
      console.log(productFoodCart.count, productFoodCart.Price);
      this.addTotals();
      {
        this.Fooditem = [...tempFoodCart];
      }
    }
    this.setChangedData(this.data)
    this.setFoodChangedData(this.dataFood)
  }
  addTotals() {
    let subTotal = 0;
    this.totalCart.forEach((item: any) => {
      subTotal += item.total;
      let tempTax = subTotal * 0.1;
      const Tax = parseFloat(tempTax.toFixed(2));
      const total = subTotal + Tax;
      item.cartSubTotal = subTotal;
      item.cartTax = Tax;
      item.cartTotal = total;
      
      this.cartSubTotal = item.cartSubTotal
      this.cartTax = item.cartTax;
      this.cartTotal = item.cartTotal
    });
    this.totalFoodCart.forEach((item: any) => {
      subTotal += item.total;
      let tempTax = subTotal * 0.1;
      const Tax = parseFloat(tempTax.toFixed(2));
      const total = subTotal + Tax;
      item.cartSubTotal = subTotal;
      item.cartTax = Tax;
      item.cartTotal = total;
      
      this.cartSubTotal = item.cartSubTotal
      this.cartTax = item.cartTax;
      this.cartTotal = item.cartTotal
    });
    this.data=[{cartSubTotal:this.cartSubTotal,cartTax:this.cartTax,cartTotal:this.cartTotal}]
    this.dataFood=[{cartSubTotal:this.cartSubTotal,cartTax:this.cartTax,cartTotal:this.cartTotal}]
    console.log("data",this.totalFoodCart);
  }
  addToCart(id: any) {
    let tempCart = [...this.cartDrinkItems];
    let tempCartIndex = tempCart.indexOf(
      this.cartDrinkItems.find((t: any) => t.id === id)
    );
    let itemCart = tempCart[tempCartIndex];
    if (itemCart) {
      if (itemCart.count === 0) {
        this.cart.push(itemCart);
      }
      this.totalCart = this.cart;
    }
    let tempFoodCart = [...this.cartFoodItems];
    let tempFoodCartIndex = tempFoodCart.indexOf(
      this.cartFoodItems.find((t: any) => t.id === id)
    );
    let itemFoodCart = tempFoodCart[tempFoodCartIndex];
    if (itemFoodCart) {
      if (itemFoodCart.count === 0) {
        this.Foodcart.push(itemFoodCart);
      }
      this.totalFoodCart = this.Foodcart;
    }

    console.log('My Cart total Array', this.totalCart);

    console.log('My Cart Food Array', this.totalFoodCart);
  }
  removeFromCart(id: any) {
    let tempCart = [...this.totalCart];
    let tempCartIndex = tempCart.findIndex((t: any) => t.id === id);
    this.totalCart.splice(tempCartIndex, 1);
    console.log('My Cart Array', this.totalCart);
    this.setChangedData(this.data)

    let tempFoodCart = [...this.totalFoodCart];
    let tempFoodCartIndex = tempFoodCart.findIndex((t: any) => t.id === id);
    this.totalFoodCart.splice(tempFoodCartIndex, 1);
    console.log('My Cart Array', this.totalFoodCart);
    this.setFoodChangedData(this.dataFood)
  }
  Decrement(id: any) {
    let tempCart = [...this.totalCart];
    const tempCartIndex = tempCart.indexOf(
      this.totalCart.find((t: any) => t.id === id)
    );
    const productCart = tempCart[tempCartIndex];
    if(productCart){
      if (productCart.count > 0) {
        productCart.count = productCart.count - 1;
        productCart.Price = productCart.productPrice * productCart.count;
        productCart.total = productCart.Price;
        console.log(productCart.count, productCart.Price);
        this.addTotals();
      }
      if (productCart.count === 0) {
        this.removeFromCart(id);
      }
      else{
        return
      }
    }
    let tempFoodCart = [...this.totalFoodCart];
    const tempFoodCartIndex = tempFoodCart.indexOf(
      this.totalFoodCart.find((t: any) => t.id === id)
    );
    const productFoodCart = tempFoodCart[tempFoodCartIndex];
    if(productFoodCart){
      if (productFoodCart.count > 0) {
        productFoodCart.count = productFoodCart.count - 1;
        productFoodCart.Price =
          productFoodCart.productPrice * productFoodCart.count;
        productFoodCart.total = productFoodCart.Price;
        console.log(productFoodCart.count, productFoodCart.Price);
        this.addTotals();
      }
      if (productFoodCart.count === 0) {
        this.removeFromCart(id);
      }
      else{
        return
      }
    }
  }
  public subject = new Subject<any>();
  private updatedData = new BehaviorSubject(this.totalCart);
  setChangedData(data: any) {
    this.updatedData.next(data);
  }

  getData(){
   return this.updatedData.asObservable();
  }
  public subjectFood = new Subject<any>();
  private updatedFoodData = new BehaviorSubject(this.totalFoodCart);
  setFoodChangedData(dataFood: any) {
    this.updatedFoodData.next(dataFood);
  }

  getFoodData(){
   return this.updatedFoodData.asObservable();
  }
}
