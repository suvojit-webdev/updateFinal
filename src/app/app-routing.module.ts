import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PnfComponent } from './pnf/pnf.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogComponent } from './blog/blog.component';
import { RewardsComponent } from './rewards/rewards.component';
import { BlogSingleComponent } from './blog/blog-single/blog-single.component';
import { FaqsComponent } from './faqs/faqs.component';
import { DesignScourseComponent } from './design-scourse/design-scourse.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { authGuard } from './authentication/auth.guard';

const routes: Routes = [


  {path:'', redirectTo:'/home', pathMatch:'full'},

  {path:'home', component:HomeComponent},

  {path:'courses', component:CoursesComponent},

  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},

  {path:'pricing', component:PricingComponent},

  {path:'blog', component:BlogComponent},
  {path:'blogSingle', component:BlogSingleComponent},


  {path:'design', component:DesignScourseComponent},




  {path:'faqs', component:FaqsComponent},
  // {path:'rewards', component:RewardsComponent},

  {path:'profile', component:ProfilePageComponent, canActivate:[authGuard]},

  {path:'about', component:AboutUSComponent},



  {path:'**', component:PnfComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
