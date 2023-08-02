import { Component, OnInit } from '@angular/core';
import { DataService } from '../allServiceFiles/data.service';
import { Router } from '@angular/router';
import { StoreService } from '../allServiceFiles/store.service';
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit{
  userDetails!: any;
  baseURL: string ='https://wtsacademy.dedicateddevelopers.us/';

  constructor(
    private regService: DataService,
    private storeSer: StoreService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.regService.user_profile().subscribe((res: any) => {
      this.userDetails = res.data;
      console.log('User Details: ', this.userDetails);
    });    
  }

  loggingOut(){
    this.storeSer.getDestroy();
    alert("Logged Out");
    this.route.navigate(['/login']);
  }

}
