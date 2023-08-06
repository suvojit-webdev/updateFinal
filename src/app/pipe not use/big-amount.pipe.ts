import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bigAmount'
})
export class BigAmountPipe implements PipeTransform {

  transform(price: number): string {
    return price >= 1000 ? '★' : '';
  }

}
