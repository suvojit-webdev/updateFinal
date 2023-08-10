import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemCountSubject = new BehaviorSubject<number>(0);
  cartItemCount$: Observable<number> = this.cartItemCountSubject.asObservable();

  private cartItems: any[] = []; // You might want to define a proper type here

  addToCart(item: any) {
    this.cartItems.push(item);
    this.cartItemCountSubject.next(this.cartItemCountSubject.value + 1);
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  removeItem(index: number): void {
    if (index >= 0 && index < this.cartItems.length) {
      this.cartItems.splice(index, 1);
      this.updateCartItemCount();
    }
  }

  private updateCartItemCount(): void {
    const itemCount = this.cartItems.length;
    this.cartItemCountSubject.next(itemCount);
  }

  clearCart(): void {
    this.cartItems = [];
    this.updateCartItemCount();
  }
}
