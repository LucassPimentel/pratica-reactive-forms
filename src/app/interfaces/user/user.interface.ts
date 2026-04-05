import { MaritalStatusEnum } from 'src/app/enums/marital-status.enum';
import { IPhone } from './phone.interface';
import { IAddress } from './address.interface';
import { IDependent } from './dependent.interface';

export interface IUser {
  name: string;
  email: string;
  country: string;
  state: string;
  maritalStatus: MaritalStatusEnum; // -> Estado Civil
  monthlyIncome: number; // -> Renda Mensal
  birthDate: string;
  phoneList: IPhone[];
  addressList: IAddress[];
  dependentsList: IDependent[];
}
