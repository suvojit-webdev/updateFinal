import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../allServiceFiles/data.service';
import { Router } from '@angular/router';
import { ToastService } from '../allServiceFiles/toast.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  formValues!: any;
  imgData!: any;


  constructor(
    private formBuilder: FormBuilder,
    private regService: DataService,
    private route: Router,
    private toaster: ToastService,
  ) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({

      first_name: ['', [Validators.required,Validators.pattern(/^[A-Z][a-zA-Z]*$/), Validators.minLength(3)]],
      last_name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password: ['', [Validators.required,Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#*&])[A-Za-z\d@#*&]{8,}$/)]],
      remember: [false],
      privacy: [false],
      profile_pic: ['', Validators.required],

    });
  }

  //image storage
  fileSelect(ev: any) {
    console.log(ev.target.files[0]);
    this.imgData = ev.target.files[0];
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
    formData.append('profile_pic', this.imgData, this.imgData.name);


    this.regService.rgdata(formData).subscribe((res: any) => {
      console.log('response after posting', res);

      if (res.status == 200) {
        // alert('SignUp Done ✔️');
        this.toaster.ShowSuccess('SignUp Done');
        this.route.navigate(['/login']);
      // Clear the form after successful registration
      this.clearForm();
      } else {
        // alert('❌ Failed ❌');
        this.toaster.ShowError('❌ Failed ❌');
        
      }
    });
  }
}
