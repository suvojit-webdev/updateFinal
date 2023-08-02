import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewCourseService {

  constructor() { }

  getCourses() {
    return [
      {
        id:1,
        imgSrc: 'assets/img/courses/all courses/JOT/1.jpg',
        title: 'Automation & Planning',
        price: 97500,
        description: 'C programming, Basic Network and Basic Electrical & Electronics',
      },
      {
        id:2,
        imgSrc: 'assets/img/courses/all courses/JOT/2.jpg',
        title: 'MERN Stack',
        price: 52000,
        description: 'MongoDB, Express, ReactJS, Node JS',
      },
      {
        id:3,
        imgSrc: 'assets/img/courses/all courses/JOT/3.jpg',
        title: 'MEAN Stack',
        price: 52000,
        description: 'Mongo DB, ExpressJS, Angular & Node JS',
      },
      {
        id:4,
        imgSrc: 'assets/img/courses/all courses/JOT/4.jpg',
        title: 'Node JS',
        price: 52000,
        description: 'Mongo DB, ExpressJS, Angular & Node JS',
      },
      {
        id:5,
        imgSrc: 'assets/img/courses/all courses/JOT/5.jpg',
        title: 'React JS',
        price: 32500,
        description: 'HTML5, CSS3, ES6, Component, Redux, Node API',
      },
      {
        id:6,
        imgSrc: 'assets/img/courses/all courses/JOT/6.jpg',
        title: 'Angular',
        price: 32500,
        description: 'HTML5, CSS3, SCSS, TypeScript , ES6, Routing',
      },
      {
        id:7,
        imgSrc: 'assets/img/courses/all courses/JOT/7.jpg',
        title: 'Software Testing',
        price: 32500,
        description: 'Selenium, TestComplete, Worksoft, Cucumber, Testsigma',
      },
      {
        id:8,
        imgSrc: 'assets/img/courses/all courses/JOT/8.jpg',
        title: 'iOS App Development',
        price: 32500,
        description: 'Swift – OOPS Concepts, UITableView, Model Views',
      },
      {
        id:9,
        imgSrc: 'assets/img/courses/all courses/JOT/9.jpg',
        title: 'Android App Development Using Kotlin',
        price: 39000,
        description: 'C Language, Android UI/UX, XML, Android SDK Components',
      },
      {
        id:10,
        imgSrc: 'assets/img/courses/all courses/JOT/10.jpg',
        title: 'Android App Development Using Core Java',
        price: 39000,
        description: 'UI design & Operation, Intent & Bundle',
      },
      {
        id:11,
        imgSrc: 'assets/img/courses/all courses/JOT/11.jpg',
        title: 'Flutter with Dart',
        price: 78000,
        description: 'HTML, CSS, Basic Programming, OOPs',
      },
      {
        id:12,
        imgSrc: 'assets/img/courses/all courses/JOT/12.jpg',
        title: 'React Native',
        price: 39000,
        description: 'iOS setup, Modelling, Styling, APLs, Firebase, Authentication',
      },
      {
        id:13,
        imgSrc: 'assets/img/courses/all courses/JOT/13.jpg',
        title: 'Advanced PHP and MVC (Laravel)',
        price: 44200,
        description: 'PHP, MySQL,MVC',
      },
      {
        id:14,
        imgSrc: 'assets/img/courses/all courses/JOT/14.jpg',
        title: 'Professional Laravel with API',
        price: 39000,
        description: 'PHP, MySQL, MVC, LARAVEL',
      },
      {
        id:15,
        imgSrc: 'assets/img/courses/all courses/JOT/15.jpg',
        title: 'Web Designing with Bootstrap',
        price: 39000,
        description: 'HTML, CSS, Bootstrap, Mobile & Browser Compatibility',
      },
      {
        id:16,
        imgSrc: 'assets/img/courses/all courses/JOT/16.jpg',
        title: 'UI/UX Design',
        price: 46800,
        description: 'UX – UI Designs, Wire-frame, Browser Compatability',
      },
    ];
  }

  getCourses2() {
    return [
      {
        id: 1,
        title: 'C & Data Structure, Python, Aptitude, Group Discussion and HR',
        imageUrl: 'assets/img/courses/all courses/PPC/01.jpg',
        price: 39000
      },
      {
        id: 2, 
        title: 'C & Data Structure, Python, Aptitude, Group Discussion and HR',
        imageUrl: 'assets/img/courses/all courses/PPC/01.jpg',
        price: 65000
      },
      {
        id: 3, 
        title: 'C & Data Structure, C++, Aptitude, Group Discussion and HR',
        imageUrl: 'assets/img/courses/all courses/PPC/02.jpg',
        price: 39000
      },
      {
        id: 4, 
        title: 'C & Data Structure, C++, Aptitude, Group Discussion and HR',
        imageUrl: 'assets/img/courses/all courses/PPC/02.jpg',
        price: 65000
      },
      {
        id: 5, 
        title: 'C & DS, JAVA, Aptitude, Group Discussion and HR',
        imageUrl: 'assets/img/courses/all courses/PPC/03.jpg',
        price: 39000
      },
      {
        id: 6, 
        title: 'C & DS, JAVA, Aptitude, Group Discussion and HR',
        imageUrl: 'assets/img/courses/all courses/PPC/03.jpg',
        price: 65000
      }
    ];
  }

}
