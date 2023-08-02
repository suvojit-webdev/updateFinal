import { Component,Input, OnInit } from '@angular/core';
import { StoreService } from './allServiceFiles/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'fullNproject';

  @Input() itemCount: number = 0;

  // cart count
  cartItemCount: number = 0;

  addToCart() {
    this.cartItemCount++;
  }

  showSmartBar: boolean = true;
  closeSmartBar() {
    this.showSmartBar = false;
  }

  token!: any;
  data!: any;
  f_name!: any;
  l_name!: any;

  

  constructor(private storeSer: StoreService, private route: Router) {}
  
  ngOnInit(): void {
   console.log(this.loggedin());
   

  }
  loggedin() {
    this.token = this.storeSer.getToken();
    // console.log('Token Value', this.token);

    if (this.token) {
      this.data = this.storeSer.getData();
      console.log('User Data:', this.data);
      this.f_name = this.data[0].first_name;
      this.l_name = this.data[0].last_name;
    }
    return this.token;
  }

  loggingOut(){
    this.storeSer.getDestroy();
    alert("Logged Out");
    this.route.navigate(['/login']);
  }

  
  
}
