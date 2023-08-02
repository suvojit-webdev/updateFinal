import { AfterViewInit, Component, OnInit } from '@angular/core';

// form
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//service
import { HomeCourseService } from '../allServiceFiles/home-course.service';

//jquery for owl carousal
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit, OnInit{
  // filter1(A broad selection of courses)
  options: any[] = [
    {
      title: 'Python',
      content: 'Python content goes here.',
      imageSrc: 'assets/img/filter1logo/python.png',
      price: 649,
    },
    {
      title: 'Excel',
      content: 'Excel content goes here.',
      imageSrc: 'assets/img/filter1logo/excel.png',
      price: 649,
    },
    {
      title: 'Web Development',
      content: 'Web Development content goes here.',
      imageSrc: 'assets/img/filter1logo/webdev.png',
      price: 649,
    },
    {
      title: 'JavaScript',
      content: 'JavaScript content goes here.',
      imageSrc: 'assets/img/filter1logo/js.png',
      price: 649,
    },
    {
      title: 'Data Science',
      content: 'Data Science content goes here.',
      imageSrc: 'assets/img/filter1logo/datascience.png',
      price: 649,
    },
    {
      title: 'Amazon AWS',
      content: 'Amazon AWS content goes here.',
      imageSrc: 'assets/img/filter1logo/amazonaws.png',
      price: 649,
    },
    {
      title: 'Drawing',
      content: 'Drawing content goes here.',
      imageSrc: 'assets/img/filter1logo/drawing.png',
      price: 649,
    },
  ];

  selectedOption: any = null;

  showCard(option: any): void {
    this.selectedOption = option;
  }

// cart count
cartItemCount: number = 0;

  addToCart() {
    this.cartItemCount++;
  }

// form
contactForm!: FormGroup;

// contact form location
locations = [
  'Andhra Pradesh',
  'Arunachal Pradesh', 
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttarakhand',
  'Uttar Pradesh',
  'West Bengal',
];

clearForm() {
  this.contactForm.reset();
  this.contactForm.get('location')!.setValue('');
}

courses: any[];

testimonials: any[];

categories: any[];

topCompanies: any[];

cards:any[];

events: any[];

  constructor(private formBuilder: FormBuilder,
    private courseService: HomeCourseService) 
    {
      this.courses = this.courseService.getCourses(); 
      this.testimonials = this.courseService.getTestimonials();
      this.categories = this.courseService.getCategories();

      this.topCompanies = this.courseService.getTopCompanies();

      this.cards = this.courseService.getCards();

      // 
      this.events = this.courseService.getEvents();
    }
  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.contactForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      location: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.contactForm.valid) {
      // Display the submitted data
      console.log('Submitted Data:', this.contactForm.value);
      alert("Contact Data Submitted")

      // Clear the form
      this.clearForm();
    }
  }


  //owl carousal
  ngAfterViewInit(): void {
    $('.owl-carousel').owlCarousel({
      nav: false,
      loop: true,
      margin: 30,
      dots: true,
      autoplay: true,
      autoplaySpeed: 2200,
      autoplayTimeout: 2200,
      autoplayHoverPause: true,
      slideTransition: 'linear',
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 2,
        },
        768: {
          items: 3,
        },
        992: {
          items: 4,
        },
      },
    });
  }

  

}
