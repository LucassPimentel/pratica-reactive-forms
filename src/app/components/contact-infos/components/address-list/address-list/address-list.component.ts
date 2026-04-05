import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IAddressToDisplay } from 'src/app/interfaces/user/address-to-display.interface';
import { IAddress } from 'src/app/interfaces/user/address.interface';
import { prepareAddressList } from 'src/app/utils/prepare-address-list';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss'],
})
export class AddressListComponent implements OnChanges {
  @Input({ required: true }) addresses: IAddress[] | undefined = [];
  addressesListToDisplay: IAddressToDisplay[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (Array.isArray(changes['addresses'].currentValue)) {
      this.prepareAddressListToDisplay();
    }
  }
  prepareAddressListToDisplay() {
    this.addressesListToDisplay = [];

    const originalAddressList =
      this.addresses && this.addresses.length > 0 ? this.addresses : [];
    prepareAddressList(originalAddressList, true, (address) => {
      this.addressesListToDisplay.push(address);
    });
  }
}
