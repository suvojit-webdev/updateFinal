import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  isLoading: boolean = true;
  blogPosts: any[] = [];
  categories: string[] = ['Category 1', 'Category 2', 'Category 3'];

  ngOnInit() {
    // Simulating data loading (replace this with actual data fetching logic)
    this.loadData();
  }

  loadData() {
    // Simulate an API call to fetch blog posts data
    setTimeout(() => {
      // Replace this sample data with actual data from your API response
      this.blogPosts = [
        { title: 'How CodeTutor can transform your coding skills.', 
          content: "Learning to code can seem daunting, but with the right guidance it can be an achievable and rewarding journey. That's where CodeTutor comes in. ",
          date: 'Aug 8, 2023',
          image: 'assets/img/blogimg/blogoi.png', 
        },
        { title: 'Praesent tempus quam vitae urna posuere fringilla.', 
          content: "Learning to code can seem daunting, but with the right guidance it can be an achievable and rewarding journey. That's where CodeTutor comes in. ",
          date: 'Aug 5, 2023',
          image: 'assets/img/blogimg/blogoi2.png', 
        },
        { title: 'Nulla feugiat mauris vel magna scelerisque fringilla.', 
          content: "Learning to code can seem daunting, but with the right guidance it can be an achievable and rewarding journey. That's where CodeTutor comes in. ",
          date: 'Aug 3, 2023',
          image: 'assets/img/blogimg/blogoi.png',
        },
      ];
      this.isLoading = false; // Data loading is complete
    }, 2000); // Simulating 2 seconds delay for data fetching
  }

  keyword: string = '';

  handleKeywordSearch() {
    if (this.keyword.trim() === '') {
      // If the search keyword is empty, reset the blogPosts to show all posts
      this.blogPosts = [
        { title: 'How CodeTutor can transform your coding skills.', content: "Learning to code can seem daunting, but with the right guidance it can be an achievable and rewarding journey. That's where CodeTutor comes in. " },
        { title: 'Praesent tempus quam vitae urna posuere fringilla.', content: "Learning to code can seem daunting, but with the right guidance it can be an achievable and rewarding journey. That's where CodeTutor comes in. " },
        { title: 'Nulla feugiat mauris vel magna scelerisque fringilla.', content: "Learning to code can seem daunting, but with the right guidance it can be an achievable and rewarding journey. That's where CodeTutor comes in. " },
      ];
    } else {
      // If the search keyword is not empty, filter the blogPosts based on the title
      this.blogPosts = this.blogPosts.filter(post =>
        post.title.toLowerCase().includes(this.keyword.trim().toLowerCase())
      );
    }
  }
  
  
}

