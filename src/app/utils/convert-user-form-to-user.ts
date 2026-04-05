import {
  IUserForm,
  IUserFormAddress,
  IUserFormDependent,
  IUserFormGeneralInfos,
  IUserFormPhonePhone,
} from '../interfaces/user-form.interface';
import { IAddress } from '../interfaces/user/address.interface';
import { IDependent } from '../interfaces/user/dependent.interface';
import { IPhone } from '../interfaces/user/phone.interface';
import { IUser } from '../interfaces/user/user.interface';
import { convertDateObjToPtBrDate } from './convert-date-obj-to-ptbr-date';
import { formatNumber } from './format-number';

export const ConvertUserFormToUser = (userFormRawValue: IUserForm): IUser => {
  let newUser: Partial<IUser> = {} as IUser;

  newUser = { ...convertGeneralInfos(userFormRawValue.generalInfos) };
  newUser.phoneList = [
    ...convertPhoneList(userFormRawValue.contactInfos.phoneList),
  ];
  newUser.addressList = [
    ...convertAddressList(userFormRawValue.contactInfos.addressList),
  ];

  newUser.dependentsList = [
    ...convertDependentsList(userFormRawValue.dependentsList),
  ];

  return newUser as IUser;
};

const convertGeneralInfos = (
  generalInfos: IUserFormGeneralInfos,
): Partial<IUser> => {
  return {
    name: generalInfos.name,
    email: generalInfos.email,
    country: generalInfos.country,
    state: generalInfos.state,
    maritalStatus: generalInfos.maritalStatus,
    monthlyIncome: generalInfos.monthlyIncome,
    birthDate: convertDateObjToPtBrDate(generalInfos.birthDate),
  };
};

const convertPhoneList = (phoneList: IUserFormPhonePhone[]): IPhone[] => {
  const newUserPhoneList: IPhone[] = phoneList
    .map((phone) => ({
      type: phone.type,
      internationalCode: '+' + phone.phoneNumber.substring(0, 2),
      areaCode: phone.phoneNumber.substring(2, 4),
      number: formatNumber(phone.phoneNumber.substring(4)),
    }))
    .filter((phone) => phone.areaCode !== '');
  return newUserPhoneList;
};

const convertAddressList = (addressList: IUserFormAddress[]): IAddress[] => {
  const newUserAddressList: IAddress[] = addressList.map((address) => ({
    type: address.type,
    street: address.street,
    complement: address.complement,
    country: address.country,
    state: address.state,
    city: address.city,
  }))
  .filter((address) => address.street !== '');
  return newUserAddressList;
};

const convertDependentsList = (
  dependentList: IUserFormDependent[],
): IDependent[] => {
  const newUserDependentsList: IDependent[] = dependentList.map(
    (dependent) => ({
      name: dependent.name,
      age: parseInt(dependent.age),
      document: parseInt(dependent.document),
    }),
  );
  return newUserDependentsList;
};
