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
        title: 'Adobe Acrobat Pro',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quae!'  
      },
      {
        id: 2, 
        image: 'assets/img/courses/Design Courses/2.jpg',
        title: 'Drupal 7 for Beginners',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quae!'
      }, 
      {
        id: 3, 
        image: 'assets/img/courses/Design Courses/3.jpg',
        title: 'Design Making',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quae!'
      }, 
      {
        id: 4, 
        image: 'assets/img/courses/Design Courses/4.jpg',
        title: 'Adobe Premiere Pro',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quae!'
      }, 
      {
        id: 5, 
        image: 'assets/img/courses/Design Courses/5.jpg',
        title: 'Responsive Design',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quae!'
      },
      { 
        id: 6,
        image: 'assets/img/courses/Design Courses/1.jpg',
        title: 'Adobe Acrobat Pro',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quae!'  
      },
      {
        id: 7, 
        image: 'assets/img/courses/Design Courses/2.jpg',
        title: 'Drupal 7 for Beginners',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quae!'
      }, 
      {
        id: 8, 
        image: 'assets/img/courses/Design Courses/3.jpg',
        title: 'Design Making',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quae!'
      }, 
      {
        id: 9, 
        image: 'assets/img/courses/Design Courses/4.jpg',
        title: 'Adobe Premiere Pro',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quae!'
      }, 
      {
        id: 10, 
        image: 'assets/img/courses/Design Courses/5.jpg',
        title: 'Responsive Design',
        description: 'DLorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quae!'
      },
    ];
  }

  getCards() {
    return [
      {
        id: 1,
        image: 'assets/img/courses/Design Courses/feature/1.jpg',
        title: 'Ultimate Affinity Designer 2 on iPad The Complete Course',
        text: "Become a Professional in Vector Art and Design with Newest Affinity Designer 2"
      },
      {
        id: 2,
        image: 'assets/img/courses/Design Courses/feature/2.jpg',
        title: 'Blender 3D Full Course (Project Based)',
        text: "Nulla facilisi. Phasellus malesuada, quam ut sollicitudin lacinia,elit odio aliquam orci."
      },
      {
        id: 3,
        image: 'assets/img/courses/Design Courses/feature/3.jpg',
        title: 'The most practical UX design course for beginners ever!',
        text: "Etiam eu nisi ac mauris iaculis facilisis id et arcu. Sed bibendum velit ut nisi venenatis."
      },
      {
        id: 4,
        image: 'assets/img/courses/Design Courses/feature/1.jpg',
        title: 'Ultimate Affinity Designer 2 on iPad The Complete Course',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eunisl eget risus blandit condimentum."
      },
      {
        id: 5,
        image: 'assets/img/courses/Design Courses/feature/2.jpg',
        title: 'Blender 3D Full Course (Project Based)',
        text: "Nulla facilisi. Phasellus malesuada, quam ut sollicitudin lacinia,elit odio aliquam orci."
      },
      {
        id: 6,
        image: 'assets/img/courses/Design Courses/feature/3.jpg',
        title: 'The most practical UX design course for beginners ever!',
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
        title:  'The Ultimate Drawing Course - Beginner to Advanced',
        text:   'Learn the #1 most important building block of all art, Drawing. This course will teach you how to draw like...',
        image:  'assets/img/courses/small card/card1.jpg',
        oprice: 1699,
        price:  679,
        percent: 40,
        isBestSeller: true,
        date: '2023-08-05', 
      },
      {
        title: 'Character Art School: Complete Character Drawing Course',
        text: 'Learn the core fundamentals of Character Drawing, so you can create professional art and illustrations.',
        image:  'assets/img/courses/small card/card2.jpg',
        oprice: 1999,
        price: 799,
        percent: 40,
        date: '2023-05-05',  
      },
      {
        title: 'Complete Blender Creator: Learn 3D Modelling for Beginners',
        text: 'Use Blender to Create Beautiful 3D models for Video Games, 3D Printing & More. Beginners Level Course',
        image:  'assets/img/courses/small card/card3.jpg',
        oprice: 1699,
        price:  679,
        percent: 40,
        isBestSeller: true,
        date: '2023-07-05',  
      },
      {
        title: 'Graphic Design Masterclass - Learn GREAT Design',
        text: 'The Ultimate Graphic Design Course Which Covers Photoshop, Illustrator, InDesign,Design Theory...',
        image:  'assets/img/courses/small card/card4.jpg',
        oprice: 1999,
        price: 799,
        percent: 40,
        date: '2023-07-06', 
      },
      {
        title: 'User Experience Design Essentials - Adobe XD UI UX Design',
        text: 'Use XD to get a job in UI Design, User Interface, User Experience design, UX design & Web Design',
        image:  'assets/img/courses/small card/card6.jpg',
        oprice: 1699,
        price:  679,
        percent: 40,
        isBestSeller: true,
        date: '2023-04-10', 
      },
      {
        title: 'Adobe After Effects: Complete Course from Novice to Expert',
        text: 'Learn Adobe After Effects CC: Master Motion Graphics, VFX Visual Effects & VFX Compositing...',
        image:  'assets/img/courses/small card/card7.jpg',
        oprice: 1999,
        price: 799,
        percent: 40,
        date: '2023-08-06',  
      },
      {
        title: 'Wordpress for Beginners - Master Wordpress Quickly',
        text: 'In 2023, build a beautiful responsive Wordpress site that looks great on all devices. No experience...',
        image:  'assets/img/courses/small card/card8.jpg',
        oprice: 2199,
        price: 879,
        percent: 40,
        date: '2023-07-10',
      },
      {
        title: 'Web Design for Beginners: Real World Coding in HTML & CSS',
        text: 'Launch a career as a web designer by learning HTML5, CSS3, responsive design, Sass and more!',
        image:  'assets/img/courses/small card/card9.jpg',
        oprice: 2199,
        price: 879,
        percent: 40,
        isBestSeller: true,
        date: '2023-08-05',  
      },
      {
        title: 'Complete Web & Mobile Designer in 2023: UI/UX, Figma, +more',
        text: 'Become a Designer in 2023! Master Mobile and Web Design, User Interface + User Experience (UI/UX...',
        image:  'assets/img/courses/small card/card10.jpg',
        oprice: 1699,
        price:  679,
        percent: 40,
        date: '2023-08-05',
      },
      {
        title: 'Adobe Photoshop CC: A Beginner to Advanced Photoshop Course',
        text: 'You can learn Adobe Photoshop CC. Graphic Design, Photo Editing & Retouching, Learn it all with this...',
        image:  'assets/img/courses/small card/card11.jpg',
        oprice: 1999,
        price: 799,
        percent: 40,
        isBestSeller: true,
        date: '2023-07-05',
      },
      {
        title: 'CSS - The Complete Guide 2023 (incl. Flexbox, Grid & Sass)',
        text: 'Learn CSS for the first time or brush up your CSS skills and dive in even deeper. EVERY web developer has...',
        image:  'assets/img/courses/small card/card12.jpg',
        oprice: 1699,
        price:  679,
        percent: 40,
        date: '2023-08-05',
      },
      {
        title: 'The Complete Graphic Design Theory for Beginners Course',
        text: 'Learn Graphic Design Theory and the Basic Principles of Color Theory, Typography, Branding, Logo Design...',
        image:  'assets/img/courses/small card/card13.jpg',
        oprice: 1999,
        price: 799,
        percent: 40,
        isBestSeller: true,
        date: '2023-06-6',
      },
    ];
  }



}