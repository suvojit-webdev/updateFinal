import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../allServiceFiles/data.service';
import { StoreService } from '../allServiceFiles/store.service';
import { Router } from '@angular/router';

import { ToastService } from '../allServiceFiles/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  formData!: any;
  formService!: any;
  serverErr!: any;

  constructor(
    private fb: FormBuilder,
    private ser: DataService,
    private store: StoreService,
    private route: Router,
    private toaster: ToastService,
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password: ['', [Validators.required,Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#*&])[A-Za-z\d@#*&]{8,}$/)]],
    });
  }

  passwordVisible: boolean = false;

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Handle the form submission here
      console.log(this.loginForm.value);

      const formData: FormData = new FormData();

      formData.append('email', this.loginForm.value.email);
      formData.append('password', this.loginForm.value.password);

      this.ser.logindata(formData).subscribe(
        (res: any) => {
          console.log('Response of sign in', res);
          let loginRes = res.data;
          if (res.status == 200) {
            // alert('Login Successful ✅');
            this.toaster.ShowSuccess('Login Successfully');
            this.route.navigate(['/profile']);
            this.store.setData(
              loginRes.first_name,
              loginRes.last_name,
              loginRes.email,
              res.token
            );
          } else {
            // alert('Invalid Input ❌');
            this.toaster.ShowErr('Invalid Input');

          }
        },

        (err: any) => {
          this.serverErr = err;
          console.log('error: ', this.serverErr);
          alert(this.serverErr.message);
        }
      );
    }
  }
}
