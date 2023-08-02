import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { PnfComponent } from './pnf/pnf.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogComponent } from './blog/blog.component';
import { RewardsComponent } from './rewards/rewards.component';
import { BlogSingleComponent } from './blog/blog-single/blog-single.component';
import { FaqsComponent } from './faqs/faqs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DesignScourseComponent } from './design-scourse/design-scourse.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { StoreService } from './allServiceFiles/store.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { InterceptorService } from './allServiceFiles/interceptor.service';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { AboutUSComponent } from './about-us/about-us.component'; 





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    CoursesComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    PnfComponent,
    PricingComponent,
    BlogComponent,
    RewardsComponent,
    BlogSingleComponent,
    FaqsComponent,
    DesignScourseComponent,
    ProfilePageComponent,
    BackToTopComponent,
    AboutUSComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [
    StoreService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:InterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
