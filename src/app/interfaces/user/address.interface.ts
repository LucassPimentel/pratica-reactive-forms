import { AddressTypeEnum } from "src/app/enums/address-type.enum";

export interface IAddress {
  type: AddressTypeEnum; // -> Tipo
  street: string; // -> Rua
  complement: string; // -> Complemento
  country: string; // -> País
  state: string; // -> Estado
  city: string; // -> Cidade
}