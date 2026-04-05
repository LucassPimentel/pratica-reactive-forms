export interface IUserForm {
  generalInfos: IUserFormGeneralInfos;
  contactInfos: IUserFormContactInfos;
  dependentsList: IUserFormDependent[];
}

export interface IUserFormGeneralInfos {
  name: string;
  email: string;
  country: string;
  state: string;
  maritalStatus: number;
  monthlyIncome: number;
  birthDate: Date;
}

export interface IUserFormContactInfos {
  phoneList: IUserFormPhonePhone[];
  addressList: IUserFormAddress[];
}

export interface IUserFormPhonePhone {
  type: number;
  typeDescription: string;
  phoneNumber: string;
}

export interface IUserFormAddress {
  type: number;
  typeDescription: string;
  street: string;
  complement: string;
  country: string;
  state: string;
  city: string;
}

export interface IUserFormDependent {
  name: string;
  age: string;
  document: string;
}
