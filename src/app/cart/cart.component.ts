import { Component } from '@angular/core';

import { CartService } from '../allServiceFiles/cart.service';

import { Router } from '@angular/router';
// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   quantity: number;
// }

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  // @Input() itemCount: number = 0;
  // products: Product[] = [
  //   { id: 1, name: 'Product 1', price: 699, quantity: 0 },
  //   { id: 2, name: 'Product 2', price: 799, quantity: 0 },
  // ];

  // totalAmount: number = 0;
  // couponCode: string = '';
  // appliedCoupon: boolean = false;

  // removeProductFromCart(productId: number) {
  //   this.products = this.products.filter((product) => product.id !== productId);
  //   this.calculateTotalAmount();
  // }

  // applyCoupon() {
  //   if (this.couponCode === 'COUPON10') {
  //     this.totalAmount *= 0.9;
  //     this.totalAmount = parseFloat(this.totalAmount.toFixed(2));
  //     this.appliedCoupon = true;
  //   } else {
  //     this.appliedCoupon = false;
  //   }
  // }
  

  // updateQuantity(product: Product, action: 'increase' | 'decrease') {
  //   if (action === 'increase') {
  //     product.quantity++;
  //   } else if (action === 'decrease') {
  //     if (product.quantity > 0) {
  //       product.quantity--;
  //     }
  //   }
  //   this.calculateTotalAmount();
  // }

  // calculateTotalAmount() {
  //   this.totalAmount = this.products.reduce((total, product) => total + (product.price * product.quantity), 0);
  // }


  // cartItemCount: number = 0;

  // constructor(private cartService: CartService) { }

  // ngOnInit(): void {
  //   this.cartService.cartItemCount$.subscribe(count => {
  //     this.cartItemCount = count;
  //   });
  // }

  cartItemCount: number = 0;
  cartItems: any[] = [];

  constructor(private cartService: CartService,private router:Router,) { }

  ngOnInit(): void {
    this.cartService.cartItemCount$.subscribe(count => {
      this.cartItemCount = count;
    });

    this.cartItems = this.cartService.getCartItems();
  }

  removeItem(index: number): void {
    if (index >= 0 && index < this.cartItems.length) {
      this.cartService.removeItem(index);
    }
  }

  goBack() {
    
    this.router.navigate(['/home']);
  }
  
}
