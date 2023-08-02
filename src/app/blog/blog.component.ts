import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit{
  categories: string[] = ['Category 1', 'Category 2', 'Category 3'];
  recentPosts: string[] = ['Recent Post 1', 'Recent Post 2', 'Recent Post 3'];
  keyword: string = '';
  handleKeywordSearch() {
    // Search logic here
    console.log('Searching for:', this.keyword);
  }

  // loaderr
  isLoading: boolean = true;
  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
