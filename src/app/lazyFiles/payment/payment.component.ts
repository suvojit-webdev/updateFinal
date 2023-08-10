import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastService } from 'src/app/allServiceFiles/toast.service';

import Swal from 'sweetalert2'

import { Router } from '@angular/router';

import { CartService } from 'src/app/allServiceFiles/cart.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
  checkoutForm!: FormGroup;

  showModal: boolean = false;
  orderPlaced: boolean = false;

  constructor(private formBuilder: FormBuilder,private toaster: ToastService,private router: Router,private cartService: CartService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.checkoutForm = this.formBuilder.group({
      full_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      nameOnCard: ['', Validators.required],
      creditCardNumber: ['', Validators.required],
      expMonth: ['', Validators.required],
      expYear: ['', Validators.required],
      cvv: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      console.log(this.checkoutForm.value);
      alert('Form Submitted')
    }
  }

  clearForm() {
    this.checkoutForm.reset();
  }

  calculateTotalPrice() {
    // Implement your logic to calculate the total price based on the form data
    // Replace the following return statement with your logic
    return 649; // Example value
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  placeOrder() {
    this.orderPlaced = true;
    // alert('Order Completed')
    // this.toaster.ShowSuccess('Order Completed');
  }

  

  show(){
    Swal.fire({
      icon: 'success',
      title: 'Order Placed',
      showConfirmButton: false,
      timer: 1500
    })

     // Close the modal
    this.closeModal();

    // cart data remove
    this.cartService.clearCart(); 

    // Navigate to the home page
    // this.router.navigate(['/']);

    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1000);
  }

  
}
