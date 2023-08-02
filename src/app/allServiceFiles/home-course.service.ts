import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeCourseService {
  courses = [
    {
      id: 1,
      image: 'assets/img/courses/1.jpg',
      title: 'The Complete Python Bootcamp From Zero to Hero in Python',
      author: 'By Jose Portilla',
      price: 3199,
      discountedPrice: 699,
      isBestSeller: true,
    },
    {
      id: 2,
      image: 'assets/img/courses/2.jpg',
      title: 'Automate the Boring Stuff with Python Programming',
      author: 'By Al Sweigart',
      price: 3199,
      discountedPrice: 699,
    },
    {
      id: 3,
      image: 'assets/img/courses/3.jpg',
      title: 'Machine Learning A-Z™: AI, Python & R + ChatGPT Bonus [2023]',
      author:
        'By Kirill Eremenko,Hadelin de Ponteves,SuperDataScience Team,Ligency Team',
      price: 3199,
      discountedPrice: 699,
    },
    {
      id: 4,
      image: 'assets/img/courses/4.jpg',
      title: '100 Days of Code: The Complete Python Pro Bootcamp for 2023',
      author: 'By Dr. Angela Yu',
      price: 3199,
      discountedPrice: 699,
      isBestSeller: true,
    },
    {
      id: 5,
      image: 'assets/img/courses/5.jpg',
      title: 'Microsoft Excel - Excel from Beginner to Advanced',
      author: 'By Kyle Pew,Office Newb',
      price: 3199,
      discountedPrice: 699,
    },
    {
      id: 6,
      image: 'assets/img/courses/6.jpg',
      title: 'The Complete 2023 Web Development Bootcamp',
      author: 'By Dr. Angela Yu',
      price: 3199,
      discountedPrice: 699,
      isBestSeller: true,
    },
    {
      id: 7,
      image: 'assets/img/courses/7.jpg',
      title: 'The Web Developer Bootcamp 2023',
      author: 'By Colt Steele',
      price: 3199,
      discountedPrice: 699,
    },
    {
      id: 8,
      image: 'assets/img/courses/8.jpg',
      title: 'The Complete JavaScript Course 2023: From Zero to Expert!',
      author: 'By Jonas Schmedtmann',
      price: 3199,
      discountedPrice: 699,
    },
    {
      id: 9,
      image: 'assets/img/courses/9.jpg',
      title: 'Complete JAVASCRIPT with HTML5,CSS3 from zero to Expert-2023',
      author: 'By Hemanth kumar',
      price: 3199,
      discountedPrice: 699,
    },
    {
      id: 10,
      image: 'assets/img/courses/10.jpg',
      title: 'Python for Data Science and Machine Learning Bootcamp',
      author: 'By Jose Portilla',
      price: 3199,
      discountedPrice: 699,
    },
    {
      id: 11,
      image: 'assets/img/courses/11.jpg',
      title: 'The Ultimate Drawing Course - Beginner to Advanced',
      author: 'By Jaysen Batchelor,Quinton Batchelor',
      price: 3199,
      discountedPrice: 699,
      isBestSeller: true,
    },
    {
      id: 12,
      image: 'assets/img/courses/12.jpg',
      title: 'The Art & Science of Drawing / BASIC SKILLS',
      author: 'By Brent Eviston',
      price: 3199,
      discountedPrice: 699,
    },
  ];

  getCourses() {
    return this.courses;
  }

  //
  getTestimonials() {
    return [
      {
        id: 1,
        name: 'By Kirby Alphonzo',
        text: 'I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.',
        image:
          'https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg',
      },
      {
        id: 2,
        name: 'By Judi Mathilda',
        text: 'This course helped me freshen up on my product manager skills and land a job at Facebook! Thanks guys :)',
        image:
          'https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg',
      },
      {
        id: 3,
        name: 'By Jasmin Cannon',
        text: 'One of the best courses on management and leadership I have come across so far. The advice is practical, and examples highly relatable. Would help anyone become a better manager.',
        image:
          'https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg',
      },
      {
        id: 4,
        name: 'By Deana Reannon',
        text: 'I highly recommend this course for all budding data scientists. Even people with no prior knowledge of any visualization tools can become a master after completing this course.',
        image:
          'https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg',
      },
    ];
  }

  //
  getCategories() {
    return [
      {
        id: 1,
        title: 'Design',
        image: 'assets/img/categories/1.jpg',
      },
      {
        id: 2,
        title: 'Development',
        image: 'assets/img/categories/2.jpg',
      },
      {
        id: 3,
        title: 'Marketing',
        image: 'assets/img/categories/3.jpg',
      },
      {
        id: 4,
        title: 'IT and Software',
        image: 'assets/img/categories/4.jpg',
      },
      {
        id: 5,
        title: 'Personal Development',
        image: 'assets/img/categories/5.jpg',
      },
      {
        id: 6,
        title: 'Business',
        image: 'assets/img/categories/6.jpg',
      },
      {
        id: 7,
        title: 'Photography',
        image: 'assets/img/categories/7.jpg',
      },
      {
        id: 8,
        title: 'Music',
        image: 'assets/img/categories/8.jpg',
      },
    ];
  }

  //
  getTopCompanies() {
    return [
      {
        id: 1,
        name: 'Google',
        logo: 'assets/img/placement/google-9542.jpg',
      },
      {
        id: 2,
        name: 'Microsoft',
        logo: 'assets/img/placement/microsoft-9541.jpg',
      },
      {
        id: 3,
        name: 'Amazon',
        logo: 'assets/img/placement/amazon-9538.jpg',
      },
      {
        id: 4,
        name: 'Adobe',
        logo: 'assets/img/placement/adobe-9540.jpg',
      },
      {
        id: 5,
        name: 'Adobe',
        logo: 'assets/img/placement/netflix.jpg',
      },
      {
        id: 5,
        name: 'Adobe',
        logo: 'assets/img/placement/swiggy.png',
      },
    ];
  }

  //
  getCards() {
    return [
      {
        rating: 4.9,
        stars: 4.5,
        reviews: '100+',
        image: 'assets/img/cardrate/facebook.png',
        company:'Facebook',
      },
      {
        rating: 4.8,
        stars: 4.5,
        reviews: '1000+',
        image: 'assets/img/cardrate/googlenew.png',
        company:'Google',
      },
      {
        rating: '50+',
        reviews: 'Questions asked',
        answered: '5000 answered',
        image: 'assets/img/cardrate/quora.png',
        company:'Quora',
      },
    ];
  }

  //
  getEvents() {
    return [
      {
        image: 'assets/img/events/page1.png',
        title: 'Code Olympiad',
        date: '05:00 PM, 28 August, 2023',
      },
      {
        image: 'assets/img/events/page2.png',
        title: 'PI Day Code Compitation',
        date: '07:00 PM, 14 March, 2024',
      },
      {
        image: 'assets/img/events/page3.png',
        title: 'Hackathon Compitation',
        date: '10:00 AM, 30 September, 2023',
      },
      {
        image: 'assets/img/events/page1.png',
        title: 'Code Olympiad',
        date: '05:00 PM, 28 August, 2023',
      },
      {
        image: 'assets/img/events/page2.png',
        title: 'PI Day Code Compitation',
        date: '07:00 PM, 14 March, 2024',
      },
      {
        image: 'assets/img/events/page3.png',
        title: 'Hackathon Compitation',
        date: '10:00 AM, 30 September, 2023',
      },

   
      
    ];
  }


  
}
