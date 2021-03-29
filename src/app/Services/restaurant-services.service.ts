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

  public Foodcart: any = [];
  public Fooditem: any = [];
  public totalFoodCart: any = [];

  public cartDrinkItems: any = [];
  public cartFoodItems: any = [];
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
      },
      {
        id: 1,
        productId: 124,
        productName: 'Assyrtiko',
        productImage:
          '/../../assets/WineImages/lambros-lyrarakis-shheaRqhdas-unsplash.jpg',
        productPrice: 12,
      },
      {
        id: 2,
        productId: 125,
        productName: 'Talamonti',
        productImage:
          '/../../assets/WineImages/gabriele-garanzelli-yqAk8NyqN3Y-unsplash.jpg',
        productPrice: 15,
      },
      {
        id: 3,
        productId: 126,
        productName: 'ondule',
        productImage:
          '/../../assets/WineImages/the-creative-exchange-EB2lqnX6oGo-unsplash.jpg',
        productPrice: 6,
      },
      {
        id: 4,
        productId: 127,
        productName: 'Nebla',
        productImage:
          '/../../assets/WineImages/joel-ambass-0GsUMtnH24s-unsplash.jpg',
        productPrice: 9,
      },
      {
        id: 5,
        productId: 128,
        productName: '19 Crimes',
        productImage:
          '/../../assets/WineImages/marissa-lewis-rK_a-5QsFhw-unsplash.jpg',
        productPrice: 14,
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
      },
      {
        id: 7,
        productId: 130,
        productName: 'Sol',
        productImage:
          '/../../assets/BeerImages/david-pennington-TqvqPyf15_k-unsplash.jpg',
        productPrice: 12,
      },
      {
        id: 8,
        productId: 131,
        productName: 'Mythos',
        productImage:
          '/../../assets/BeerImages/yannis-papanastasopoulos-8RRPagVz9_Y-unsplash.jpg',
        productPrice: 15,
      },
      {
        id: 9,
        productId: 132,
        productName: 'Mythos strong',
        productImage:
          '/../../assets/BeerImages/nick-karvounis-UQxFepiJBPE-unsplash.jpg',
        productPrice: 6,
      },
      {
        id: 10,
        productId: 133,
        productName: 'Pacifico',
        productImage:
          '/../../assets/BeerImages/tom-rogerson-zXl4QWaADLQ-unsplash.jpg',
        productPrice: 9,
      },
      {
        id: 11,
        productId: 134,
        productName: 'Bavaria',
        productImage:
          '/../../assets/BeerImages/lloyd-dirks-nf_o8AHiyK4-unsplash.jpg',
        productPrice: 14,
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
      },
      {
        id: 13,
        productId: 136,
        productName: 'Chicken Biryani',
        productImage:
          '/../../assets/FoodImages/drew-taylor-jFu2L04tMBc-unsplash - Copy.jpg',
        productPrice: 12,
      },
      {
        id: 14,
        productId: 137,
        productName: 'Mutton Biryani',
        productImage:
          '/../../assets/FoodImages/emiliano-vittoriosi-OFismyezPnY-unsplash - Copy.jpg',
        productPrice: 15,
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
      },
      {
        id: 16,
        productId: 139,
        productName: 'Butter Naan',
        productImage:
          '/../../assets/WineImages/lambros-lyrarakis-shheaRqhdas-unsplash.jpg',
        productPrice: 12,
      },
      {
        id: 17,
        productId: 140,
        productName: 'Tandoori Roti',
        productImage:
          '/../../assets/WineImages/gabriele-garanzelli-yqAk8NyqN3Y-unsplash.jpg',
        productPrice: 15,
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
    // console.log('Wine Array',this.productArray)
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
    this.productArray.forEach((item: any) => {
      const singleItem = {
        ...item,
        count: 0,
        total: 0,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
      };
      this.cartDrinkItems = [...this.cartDrinkItems, singleItem];
    });
  }
  setFoodProduct() {
    this.productFoodArray.forEach((item: any) => {
      const singleFoodItem = {
        ...item,
        count: 0,
        total: 0,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
      };
      this.cartFoodItems = [...this.cartFoodItems, singleFoodItem];
    });
  }
  Increment(id: any) {
    this.addToCart(id);
    let tempCart = [...this.cartDrinkItems];
    const tempCartIndex = tempCart.indexOf(
      this.cartDrinkItems.find((t: any) => t.id === id)
    );

    let tempFoodCart = [...this.cartFoodItems];
    const tempFoodCartIndex = tempFoodCart.indexOf(
      this.cartFoodItems.find((t: any) => t.id === id)
    );

    const productCart = tempCart[tempCartIndex];
    const productFoodCart = tempFoodCart[tempFoodCartIndex];
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
    if (productFoodCart) {
      productFoodCart.count = productFoodCart.count + 1;
      productFoodCart.Price =
        productFoodCart.productPrice * productFoodCart.count;
      productCart.total = productCart.Price;
      console.log(productFoodCart.count, productFoodCart.Price);
      this.addTotals();
      {
        this.Fooditem = [...tempFoodCart];
      }
    }
  }
  Cart() {
    return this.totalCart;
  }
  addTotals() {
    this.totalCart.forEach((item: any) => {
      let subTotal = 0;
      subTotal += item.total;
      let tempTax = subTotal * 0.1;
      const Tax = parseFloat(tempTax.toFixed(2));
      const total = subTotal + Tax;
      item.cartSubTotal = subTotal;
      item.cartTax = Tax;
      item.cartTotal = total;
    });
    console.log(this.totalCart);
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
  }
  Decrement(id: any) {
    let tempCart = [...this.totalCart];
    const tempCartIndex = tempCart.indexOf(
      this.totalCart.find((t: any) => t.id === id)
    );
    console.log(tempCartIndex);
    const productCart = tempCart[tempCartIndex];
    if (productCart && productCart.count > 0) {
      productCart.count = productCart.count - 1;
      productCart.Price = productCart.productPrice * productCart.count;
      productCart.total = productCart.Price;
      console.log(productCart.count, productCart.Price);
      this.addTotals();
    }
    if (productCart.count === 0) {
      this.removeFromCart(id);
    }

    let tempFoodCart = [...this.totalFoodCart];
    const tempFoodCartIndex = tempFoodCart.indexOf(
      this.totalFoodCart.find((t: any) => t.id === id)
    );
    const productFoodCart = tempFoodCart[tempFoodCartIndex];
    if (productFoodCart && productFoodCart.count > 0) {
      productFoodCart.count = productFoodCart.count - 1;
      productFoodCart.Price =
        productFoodCart.productPrice * productFoodCart.count;
      productFoodCart.total = productFoodCart.Price;
      console.log(productFoodCart.count, productFoodCart.Price);
      this.addTotals();
      console.log(this.Fooditem);
    } else {
      return;
    }
  }
  public totalCart: any = [];
  // public subject = new Subject<any>();
  // private updatedData = new BehaviorSubject(this.totalCart);
  // setChangedData(data: any) {
  //   this.updatedData.next(data);
  //   // console.log("envrueinvr",data)
  // }

  // getData(){
  //  return this.updatedData.asObservable();
  // }
}
