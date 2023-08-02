import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent implements OnInit{

  gems = 100;

  constructor() { }

  ngOnInit() { }

  redeemItem(item: { cost: number }) {
    if (this.gems >= item.cost) {
      this.gems -= item.cost;
    }
  }  

}
