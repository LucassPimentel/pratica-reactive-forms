import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ICountry } from 'src/app/interfaces/countries-response/country.interface';
import { IState } from 'src/app/interfaces/states-response/states-response.interface';
import { maritalStatusArray } from 'src/app/utils/marital-status-description-map';

@Component({
  selector: 'app-general-infos-edit',
  templateUrl: './general-infos-edit.component.html',
  styleUrls: ['./general-infos-edit.component.scss'],
})
export class GeneralInfosEditComponent implements OnInit, OnChanges {
  @Input({ required: true }) userForm!: FormGroup;
  @Input({ required: true }) countriesList!: ICountry[];
  @Input({ required: true }) statesList!: IState[];

  @Output('onCountrySelected') onCountrySelectedEmitt =
    new EventEmitter<string>();

  countriesFilteredList: ICountry[] = [];
  stateFilteredList: IState[] = [];
  minBirthDate: Date | null = null;
  maxBirthDate: Date | null = null;

  get emailControl(): FormControl {
    return this.userForm.get('generalInfos.email') as FormControl;
  }

  get countryControl(): FormControl {
    return this.userForm.get('generalInfos.country') as FormControl;
  }

  get stateControl(): FormControl {
    return this.userForm.get('generalInfos.state') as FormControl;
  }

  get maritalStatusArray() {
    return maritalStatusArray;
  }

  ngOnInit() {
    this.handleCountryChanges();
    this.handleStateChanges();

    this.maxBirthDate = new Date();
    this.minBirthDate = new Date(new Date().getFullYear() - 120, 0, 1);
  }

  ngOnChanges() {
    this.countriesFilteredList = this.countriesList;
    this.stateFilteredList = this.statesList;

    this.handleStateChanges();
  }

  private handleStateChanges() {
    this.stateControl.valueChanges.subscribe(this.filterStatesList.bind(this));
  }

  private filterStatesList(stateInput: string) {
    if (!stateInput) return;
    this.stateFilteredList = this.statesList.filter((state) => {
      return state.name
        .toLowerCase()
        .trim()
        .startsWith(stateInput.toLowerCase().trim());
    });
  }

  onOptionSelected($event: MatAutocompleteSelectedEvent) {
    this.onCountrySelectedEmitt.emit($event.option.value);
  }

  private handleCountryChanges() {
    // o bind(this) é necessário para garantir que o contexto (classe) do this dentro do método filterCountries seja o mesmo do componente, permitindo acessar as propriedades e métodos do componente corretamente
    this.countryControl.valueChanges.subscribe(this.filterCountries.bind(this));
  }

  private filterCountries(countryInput: string) {
    if (!countryInput) return;
    this.countriesFilteredList = this.countriesList.filter((country) => {
      return country.name
        .toLowerCase()
        .trim()
        .startsWith(countryInput.toLowerCase().trim());
    });
  }
}
