import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataService } from '../allServiceFiles/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  formValues!: any;

  constructor(
    private formBuilder: FormBuilder,
    private regService: DataService,
    private route: Router
  ) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({

      first_name: ['', [Validators.minLength(3), Validators.required]],
      last_name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember: [false],
      privacy: [false],
    });
  }

  clearForm() {
    this.signupForm.reset();
  }


  //password hide-unhide
  passwordVisible: boolean = false;
  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  // form process
  onSubmit() {

    console.log(this.signupForm.value);
    this.formValues = this.signupForm.value;

    const formData: FormData = new FormData();
    formData.append('first_name', this.formValues.first_name);
    formData.append('last_name', this.formValues.last_name);
    formData.append('email', this.formValues.email);
    formData.append('password', this.formValues.password);

    this.regService.rgdata(formData).subscribe((res: any) => {
      console.log('response after posting', res);

      if (res.status == 200) {
        alert('SignUp Done ✔️');
        this.route.navigate(['/login']);
      // Clear the form after successful registration
      this.clearForm();
      } else {
        alert('❌ Failed ❌');
      }
    });
  }
}
