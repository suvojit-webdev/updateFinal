import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(originalPrice: number, discountedPrice: number): string {
    const discountPercentage = ((originalPrice - discountedPrice) / originalPrice) * 100;
    return discountPercentage.toFixed(0) + '% off';
  }

}
