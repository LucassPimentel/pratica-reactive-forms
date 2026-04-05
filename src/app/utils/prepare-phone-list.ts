import { PhoneTypeEnum } from '../enums/phone-type.enum';
import { IPhoneToDisplay } from '../interfaces/user/phone-to-display.interface';
import { IPhone } from '../interfaces/user/phone.interface';
import { phoneTypeDescriptionMap } from './phone-type-description-map';

export const preparePhoneList = (
  originalUserPhoneList: IPhone[],
  isDisplayPhone: boolean,
  callback: (phone: IPhoneToDisplay) => void,
) => {
  const phoneTypeIdConvertedToNumber = Object.keys(phoneTypeDescriptionMap).map(
    Number,
  );

  phoneTypeIdConvertedToNumber.forEach((phoneTypeId) => {
    const phoneFound = originalUserPhoneList?.find(
      (phone) => phone.type === phoneTypeId,
    );

    let phoneNumber = phoneFound ? formatPhoneNumber(phoneFound) : '-';
    if (!isDisplayPhone) {
      phoneNumber = phoneFound ? formatPhoneNumberToEdit(phoneFound) : '';
    }

    callback({
      type: phoneTypeId,
      typeDescription: phoneTypeDescriptionMap[phoneTypeId as PhoneTypeEnum],
      phoneNumber: phoneNumber,
    });
  });
};

function formatPhoneNumberToEdit(phone: IPhone) {
  return `${phone.internationalCode} ${phone.areaCode} ${phone.number}`
    .replace(/[+\-]/g, '')
    .trim();
}

function formatPhoneNumber(phone: IPhone) {
  return `${phone.internationalCode} ${phone.areaCode} ${phone.number}`;
}
