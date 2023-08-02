import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  cards = [
    {
      title: 'Card 1',
      content: 'This is the content of Card 1.',
      imageSrc: 'assets/card1.jpg',
    },
    {
      title: 'Card 2',
      content: 'This is the content of Card 2.',
      imageSrc: 'assets/card2.jpg',
    },
  ];


}
