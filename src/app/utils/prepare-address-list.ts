import { AddressTypeEnum } from '../enums/address-type.enum';
import { IAddressToDisplay } from '../interfaces/user/address-to-display.interface';
import { IAddress } from '../interfaces/user/address.interface';
import { addressTypeDescriptionMap } from './address-type-description-map';

export const prepareAddressList = (
  originalUserAddressList: IAddress[],
  isDisplayAddress: boolean,
  callback: (address: IAddressToDisplay) => void,
) => {
  const addressTypeIdConvertedToNumber = Object.keys(
    addressTypeDescriptionMap,
  ).map(Number);

  addressTypeIdConvertedToNumber.forEach((addressTypeId: number) => {
    const addressFound = originalUserAddressList.find(
      (address) => address.type === addressTypeId,
    );

    let address = returnAddressesToDisplay(addressFound, addressTypeId);
    if (!isDisplayAddress) {
      address = returnAddressToEdit(addressFound, addressTypeId);
    }

    callback({
      ...address,
    });
  });
};

function returnAddressesToDisplay(
  addressOfType: IAddress | undefined,
  addressTypeId: number,
): IAddressToDisplay {
  if (!addressOfType) {
    return {
      typeDescription:
        addressTypeDescriptionMap[addressTypeId as AddressTypeEnum],
      type: addressTypeId,
      street: '-',
      complement: '-',
      country: '-',
      state: '-',
      city: '-',
    };
  }

  return {
    typeDescription:
      addressTypeDescriptionMap[addressTypeId as AddressTypeEnum],
    ...addressOfType,
  };
}

function returnAddressToEdit(
  addressOfType: IAddress | undefined,
  addressTypeId: number,
): IAddressToDisplay {
  if (!addressOfType) {
    return {
      typeDescription:
        addressTypeDescriptionMap[addressTypeId as AddressTypeEnum],
      type: addressTypeId,
      street: '',
      complement: '',
      country: '',
      state: '',
      city: '',
    };
  }

  return {
    typeDescription:
      addressTypeDescriptionMap[addressTypeId as AddressTypeEnum],
    ...addressOfType,
  };
}
