import { Component, OnInit } from '@angular/core';
import { DataService } from '../allServiceFiles/data.service';
import { Router } from '@angular/router';
import { StoreService } from '../allServiceFiles/store.service';
import { ToastService } from '../allServiceFiles/toast.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit{
  userDetails!: any;
  img_path: any = '';
  baseURL: string ='https://wtsacademy.dedicateddevelopers.us/';
  folderPath: string = 'uploads/user/profile_pic/';

  constructor(
    private regService: DataService,
    private storeSer: StoreService,
    private route: Router,
    private toaster: ToastService,
  ) {}

  ngOnInit(): void {
    this.regService.user_profile().subscribe((res: any) => {
      this.userDetails = res.data;
      console.log('User Details: ', this.userDetails);

      this.img_path = this.baseURL + this.folderPath + this.userDetails.profile_pic;
      console.log(this.img_path);
    });    
  }

  loggingOut(){
    this.storeSer.getDestroy();
    // alert("Logged Out");
    this.toaster.ShowSuccess('Logged Out');
    this.route.navigate(['/login']);
  }

}
