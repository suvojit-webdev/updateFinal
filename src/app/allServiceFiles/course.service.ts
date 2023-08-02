import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  // Top Categories Start
  getCourses() {
    return [
      { 
        id: 1,
        image: 'assets/img/courses/Design Courses/1.jpg',
        title: 'Course 1',
        description: 'Description for course 1'  
      },
      {
        id: 2, 
        image: 'assets/img/courses/Design Courses/2.jpg',
        title: 'Course 2',
        description: 'Description for course 2'
      }, 
      {
        id: 3, 
        image: 'assets/img/courses/Design Courses/3.jpg',
        title: 'Course 3',
        description: 'Description for course 3'
      }, 
      {
        id: 4, 
        image: 'assets/img/courses/Design Courses/4.jpg',
        title: 'Course 4',
        description: 'Description for course 4'
      }, 
      {
        id: 5, 
        image: 'assets/img/courses/Design Courses/5.jpg',
        title: 'Course 5',
        description: 'Description for course 5'
      },
      { 
        id: 6,
        image: 'assets/img/courses/Design Courses/1.jpg',
        title: 'Course 6',
        description: 'Description for course 6'  
      },
      {
        id: 7, 
        image: 'assets/img/courses/Design Courses/2.jpg',
        title: 'Course 7',
        description: 'Description for course 7'
      }, 
      {
        id: 8, 
        image: 'assets/img/courses/Design Courses/3.jpg',
        title: 'Course 8',
        description: 'Description for course 8'
      }, 
      {
        id: 9, 
        image: 'assets/img/courses/Design Courses/4.jpg',
        title: 'Course 9',
        description: 'Description for course 9'
      }, 
      {
        id: 10, 
        image: 'assets/img/courses/Design Courses/5.jpg',
        title: 'Course 10',
        description: 'Description for course 10'
      },
    ];
  }

  getCards() {
    return [
      {
        id: 1,
        image: 'assets/img/courses/Design Courses/feature/1.jpg',
        title: 'Card 1 Title',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eunisl eget risus blandit condimentum."
      },
      {
        id: 2,
        image: 'assets/img/courses/Design Courses/feature/2.jpg',
        title: 'Card 2 Title',
        text: "Nulla facilisi. Phasellus malesuada, quam ut sollicitudin lacinia,elit odio aliquam orci."
      },
      {
        id: 3,
        image: 'assets/img/courses/Design Courses/feature/3.jpg',
        title: 'Card 3 Title',
        text: "Etiam eu nisi ac mauris iaculis facilisis id et arcu. Sed bibendum velit ut nisi venenatis."
      },
      {
        id: 4,
        image: 'assets/img/courses/Design Courses/feature/1.jpg',
        title: 'Card 1 Title',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eunisl eget risus blandit condimentum."
      },
      {
        id: 5,
        image: 'assets/img/courses/Design Courses/feature/2.jpg',
        title: 'Card 2 Title',
        text: "Nulla facilisi. Phasellus malesuada, quam ut sollicitudin lacinia,elit odio aliquam orci."
      },
      {
        id: 6,
        image: 'assets/img/courses/Design Courses/feature/3.jpg',
        title: 'Card 3 Title',
        text: "Etiam eu nisi ac mauris iaculis facilisis id et arcu. Sed bibendum velit ut nisi venenatis."
      },


    ];
  }

  buttonCard() {
    return [
      {title: 'Blender'},
      {title: 'Graphic Design'},
      {title: 'Photoshop'},
      {title: 'Adobe Illustrator'},
      {title: '3D Modeling'},
      {title: 'Figma'},
      {title: 'AutoCAD'},
      {title: 'Drawing'},
      {title: 'Web Design'},
      {title: 'After Effects'},
      {title: 'Motion Graphics'},
      {title: 'SOLIDWORKS'}, 
    ];
  }

  getInstructors() {
    return [
      {
        name: 'Daniel Walter Scott',
        topics: 'User Experience Design, User Interface Design',
        rating: '4.7 out of 5',
        students: '656,182',
        courses: '33',
        image: 'assets/img/courses/Design Courses/instructor/person.png'
      },
      {
        name: 'Andrei Neagoie',
        topics: 'User Experience Design, Mobile App Design',
        rating: '4.6 out of 5',
        students: '1,058,584',
        courses: '25',
        image: 'assets/img/courses/Design Courses/instructor/person.png'
      },
      {
        name: 'Lindsay Marsh',
        topics: 'Graphic Design, Adobe Illustrator',
        rating: '4.6 out of 5',
        students: '344,373',
        courses: '13',
        image: 'assets/img/courses/Design Courses/instructor/person.png'
      },
      {
        name: 'GameDev.tv Team',
        topics: 'Blender, Game Development Fundamentals',
        rating: '4.7 out of 5',
        students: '1,055,799',
        courses: '48',
        image: 'assets/img/courses/Design Courses/instructor/person.png'
      },
    ];
  }

  aDesign() {
    return [
      {
        title: 'Card 1',
        text: 'This is the content of Card 1' 
      },
      {
        title: 'Card 2',
        text: 'This is the content of Card 2'
      },
      {
        title: 'Card 3',
        text: 'This is the content of Card 3'
      },
      {
        title: 'Card 4',
        text: 'This is the content of Card 4'
      },
      {
        title: 'Card 5',
        text: 'This is the content of Card 5'
      },
      {
        title: 'Card 6',
        text: 'This is the content of Card 6'
      },
      {
        title: 'Card 7',
        text: 'This is the content of Card 7'
      },
      {
        title: 'Card 8',
        text: 'This is the content of Card 8'
      },
      {
        title: 'Card 9',
        text: 'This is the content of Card 9'
      },
      {
        title: 'Card 10',
        text: 'This is the content of Card 10'
      },
      {
        title: 'Card 11',
        text: 'This is the content of Card 11'
      },
      {
        title: 'Card 12',
        text: 'This is the content of Card 12'
      },
      {
        title: 'Card 13',
        text: 'This is the content of Card 13'
      },
      {
        title: 'Card 14',
        text: 'This is the content of Card 14'
      },
      {
        title: 'Card 15',
        text: 'This is the content of Card 15'
      },
      {
        title: 'Card 16',
        text: 'This is the content of Card 16'
      },
      {
        title: 'Card 17',
        text: 'This is the content of Card 17'
      },
      {
        title: 'Card 18',
        text: 'This is the content of Card 18'
      },
    ];
  }



}