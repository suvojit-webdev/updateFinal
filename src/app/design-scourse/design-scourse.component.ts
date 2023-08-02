import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CourseService } from '../allServiceFiles/course.service';

declare var $: any;

@Component({
  selector: 'app-design-scourse',
  templateUrl: './design-scourse.component.html',
  styleUrls: ['./design-scourse.component.css'],
})
export class DesignScourseComponent implements AfterViewInit,OnInit{
  ngAfterViewInit(): void {
    $('.slider').slick({
      dots: true,
      infinite: false,
      speed: 100,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });



    $('.autoplay').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  }

  // Courses to get you started
  courses: any[];
  // Featured courses
  cards: any[];
  // Popular topics
  buttons:any[];
  // Popular Instructors
  instructors:any[];
  // All Design Courses
  adsign:any[];
  
  
  constructor(private courseService: CourseService) {
    this.courses = this.courseService.getCourses();
    this.cards = this.courseService.getCards(); 
    this.buttons = this.courseService.buttonCard();
    this.instructors = this.courseService.getInstructors();
    this.adsign = this.courseService.aDesign();
  }

  // new
  pageSize = 6; // Number of cards per page
  currentPage = 1;
  totalPages = 1;
  pages: number[] = [];
  pagedAds: any[] = [];

  ngOnInit(): void {
    this.adsign = this.courseService.aDesign();
    this.totalPages = Math.ceil(this.adsign.length / this.pageSize);
    this.updatePageNumbers();
    this.updatePagedAds();
  }

  setPage(page: number): void {
    this.currentPage = page;
    this.updatePagedAds();
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagedAds();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagedAds();
    }
  }

  updatePageNumbers(): void {
    this.pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      this.pages.push(i);
    }
  }

  updatePagedAds(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedAds = this.adsign.slice(startIndex, endIndex);
  }
}