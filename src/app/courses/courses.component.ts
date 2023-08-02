// courses.component.ts
import { Component } from '@angular/core';

import { NewCourseService } from '../allServiceFiles/new-course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  showCourseCards: boolean = false;
  showCourseCards2: boolean = false;

  toggleCourseCards() {
    this.showCourseCards = !this.showCourseCards;
  }
  toggleCourseCards2() {
    this.showCourseCards2 = !this.showCourseCards2;
  }

  // JOT
  courses: any[] = [];
  // PPC
  courses2: any[] = [];
  constructor(private courseService: NewCourseService) {
    this.courses = this.courseService.getCourses();
    this.courses2 = this.courseService.getCourses2();
  }
}

