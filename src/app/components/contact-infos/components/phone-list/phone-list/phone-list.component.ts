import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PhoneTypeEnum } from 'src/app/enums/phone-type.enum';
import { IPhoneToDisplay } from 'src/app/interfaces/user/phone-to-display.interface';
import { IPhone } from 'src/app/interfaces/user/phone.interface';
import { phoneTypeDescriptionMap } from 'src/app/utils/phone-type-description-map';
import { preparePhoneList } from 'src/app/utils/prepare-phone-list';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.scss'],
})
export class PhoneListComponent implements OnChanges {
  @Input() phones: IPhone[] | undefined = [];
  phoneListToDisplay: IPhoneToDisplay[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (Array.isArray(changes['phones'].currentValue)) {
      this.preparePhoneListToDisplay();
    }
  }

  preparePhoneListToDisplay() {
    this.phoneListToDisplay = [];

    const originalUserPhoneList =
      this.phones && this.phones.length > 0 ? this.phones : [];

    preparePhoneList(originalUserPhoneList, true, (phone) => {
      this.phoneListToDisplay.push(phone);
    });
  }
}
