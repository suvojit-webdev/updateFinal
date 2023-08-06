import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  // @Input() itemCount: number = 0;

  

  products: Product[] = [
    { id: 1, name: 'Product 1', price: 699, quantity: 0 },
    { id: 2, name: 'Product 2', price: 799, quantity: 0 },
    // Add more products here if needed
  ];

  totalAmount: number = 0;
  couponCode: string = '';
  appliedCoupon: boolean = false;

  removeProductFromCart(productId: number) {
    this.products = this.products.filter((product) => product.id !== productId);
    this.calculateTotalAmount();
  }

  // applyCoupon() {
  //   // Here you can apply the coupon logic and update the total amount accordingly
  //   // For the sake of simplicity, we'll just assume a 10% discount on the total amount
  //   if (this.couponCode === 'COUPON10') {
  //     if (!this.appliedCoupon) {
  //       this.totalAmount *= 0.9; // 10% discount
  //       this.appliedCoupon = true;
  //     }
  //   } else {
  //     if (this.appliedCoupon) {
  //       this.totalAmount /= 0.9; // Remove 10% discount
  //       this.appliedCoupon = false;
  //     }
  //   }
  // }

  applyCoupon() {
    if (this.couponCode === 'COUPON10') {
      // If the entered coupon code is 'COUPON10', apply the discount
      this.totalAmount *= 0.9; // 10% discount
      this.totalAmount = parseFloat(this.totalAmount.toFixed(2)); // Round to two decimal places
      this.appliedCoupon = true; // Set couponApplied to true to show the "Coupon Applied!" message
    } else {
      this.appliedCoupon = false; // If the entered coupon code is incorrect, reset couponApplied to false
    }
  }
  

  updateQuantity(product: Product, action: 'increase' | 'decrease') {
    if (action === 'increase') {
      product.quantity++;
    } else if (action === 'decrease') {
      if (product.quantity > 0) {
        product.quantity--;
      }
    }
    this.calculateTotalAmount();
  }

  calculateTotalAmount() {
    this.totalAmount = this.products.reduce((total, product) => total + (product.price * product.quantity), 0);
  }


  
}
