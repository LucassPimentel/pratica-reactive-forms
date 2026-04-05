import { Pipe, PipeTransform } from '@angular/core';
import { PhoneTypeEnum } from '../enums/phone-type.enum';

@Pipe({
  name: 'phonePlaceholder'
})
export class PhonePlaceholderPipe implements PipeTransform {

  transform(phoneType: number): string {
    const phoneMaskMap: { [key in PhoneTypeEnum]: string } = {
      [PhoneTypeEnum.RESIDENTIAL]: '+55 61 1234-4321',
      [PhoneTypeEnum.MOBILE]: '+55 61 1234-4321',
      [PhoneTypeEnum.EMERGENCY]: '+55 61 1234-4321 ou +55 61 91234-4321',
    };
    return phoneMaskMap[phoneType as PhoneTypeEnum];
  }

}
