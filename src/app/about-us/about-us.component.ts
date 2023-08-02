import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUSComponent {

  instructors = [
    {
      name: 'John Doe',
      bio: 'John has 10 years experience teaching coding',
      image: 'assets/img/avout us/instructor.png'
    },
    {
      name: 'Jane Smith', 
      bio: 'Jane enjoys helping students learn programming',
      image: 'assets/img/avout us/instructor.png'
    },
    {
      name: 'Bob Johnson', 
      bio: 'Bob has been an instructor for 5 years.',
      image: 'assets/img/avout us/instructor.png'
    },
    {
      name: 'Sarah Lee', 
      bio: 'Sarah enjoys teaching frontend development.',
      image: 'assets/img/avout us/instructor.png'
    },
    {
      name: 'Mike Chan', 
      bio: 'Mike has expertise in backend programming.',
      image: 'assets/img/avout us/instructor.png'
    },
    {
      name: 'Mary Davis', 
      bio: 'Mary enjoys teaching new programming languages.',
      image: 'assets/img/avout us/instructor.png'
    },
    {
      name: 'Phil Wilson', 
      bio: 'Phil has over 20 years coding experience.',
      image: 'assets/img/avout us/instructor.png'
    },
    {
      name: 'Emma Jones', 
      bio: 'Emma enjoys teaching coding to beginners.',
      image: 'assets/img/avout us/instructor.png'
    },
    {
      name: 'Tom Baker', 
      bio: 'Tom specializes in teaching web design.',
      image: 'assets/img/avout us/instructor.png'
    },

  ];

}
