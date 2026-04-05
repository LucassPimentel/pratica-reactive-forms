import { PhoneTypeEnum } from "src/app/enums/phone-type.enum";

export interface IPhone {
  type: PhoneTypeEnum; // -> Tipo
  areaCode: string; // -> DDD
  internationalCode: string; // -> DDI
  number: string; // -> Número
}