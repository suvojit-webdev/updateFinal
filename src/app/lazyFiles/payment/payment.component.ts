import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
  checkoutForm!: FormGroup;

  showModal: boolean = false;
  orderPlaced: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

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
    alert('Order Completed')
  }

  
}
