import { StateList } from 'src/app/types/states-list';
import { IBaseCountriesResponse } from '../base-countries-response.interface';

export interface IStateResponse extends IBaseCountriesResponse {
  data: IStateResponseData;
}

export interface IStateResponseData {
  name: string;
  iso3: string;
  states: StateList;
}

export interface IState {
  name: string;
  state_code: string;
}
