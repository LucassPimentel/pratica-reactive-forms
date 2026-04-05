import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { IStateResponse } from '../interfaces/states-response/states-response.interface';

@Injectable({
  providedIn: 'root',
})
export class StatesService {
  constructor(private readonly _httpClient: HttpClient) {}

  getStates(country: string) {
    return this._httpClient
      .post<IStateResponse>(
        'https://countriesnow.space/api/v0.1/countries/states',
        {
          country: country,
        },
      )
      .pipe(map((response) => response.data.states));
  }
}
