import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ICountriesResponse } from '../interfaces/countries-response/countries-response.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private readonly _httpClient: HttpClient) {}

  getCountries() {
    return this._httpClient
      .get<ICountriesResponse>(
        'https://countriesnow.space/api/v0.1/countries/positions',
      )
      .pipe(map((response) => response.data));
  }
}
