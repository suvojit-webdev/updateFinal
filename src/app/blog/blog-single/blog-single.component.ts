import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.css']
})
export class BlogSingleComponent {
  date: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.date = params['date'] || '';
    });
  }

  
  comments: Comment[] = [];
  newComment: Comment = {
    author: '',
    text: '',
    date: new Date()
  };

  submitComment() {
    if (this.newComment.author && this.newComment.text) {
      this.comments.push(this.newComment);
      this.newComment = { author: '', text: '', date: new Date() };
    }
  }

  likes: number = 0;

  incrementLikes() {
    this.likes++;
  }
}

interface Comment {
  author: string;
  text: string;
  date: Date;
}
