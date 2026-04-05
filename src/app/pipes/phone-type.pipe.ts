import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneType'
})
export class PhoneTypePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
