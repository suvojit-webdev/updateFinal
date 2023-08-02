import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {

  plans = [
    {
      name: 'Monthly', 
      image: 'assets/img/pricing/monthly.png',
      price: 599,
      offer: '50% off for launch',
      features: [
        'All courses included',
        'Your own AI coding tutor',
        'Lifetime access to this price' 
      ],
      tick: 'assets/img/pricing/tick.png'
    },
    {
      name: 'Yearly',
      image: 'assets/img/pricing/yearly.png',
      price: 1999, 
      offer: '50% off & two months free',
      features: [
        'All courses included',
        'Your own AI coding tutor',
        'Lifetime access to this price'
      ],
      tick: 'assets/img/pricing/tick.png'
    }
  ];

}
