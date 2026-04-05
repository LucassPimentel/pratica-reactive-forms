import { Pipe, PipeTransform } from '@angular/core';
import { MaritalStatusEnum } from '../enums/marital-status.enum';
import { maritalStatusDescriptionMap } from '../utils/marital-status-description-map';

@Pipe({
  name: 'maritalStatus',
})
export class MaritalStatusPipe implements PipeTransform {
  transform(maritalStatus: number | undefined): string {
    if (!maritalStatus) return '';

    return maritalStatusDescriptionMap
      ? maritalStatusDescriptionMap[maritalStatus as MaritalStatusEnum]
      : '';
  }
}
