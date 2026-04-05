import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IUser } from 'src/app/interfaces/user/user.interface';
import { UserFormController } from './user-form-controller';
import { CountriesService } from 'src/app/services/countries.service';
import { distinctUntilChanged, Subscription, take } from 'rxjs';
import { ICountry } from 'src/app/interfaces/countries-response/country.interface';
import { StatesService } from 'src/app/services/states.service';
import { IState } from 'src/app/interfaces/states-response/states-response.interface';

@Component({
  selector: 'app-user-infos-container',
  templateUrl: './user-infos-container.component.html',
  styleUrls: ['./user-infos-container.component.scss'],
})

// quando eu extendo a classe UserFormController, eu posso colocar toda a lógica de controle do formulário nessa classe, e o componente UserInfosContainerComponent fica responsável apenas por lidar com a apresentação dos dados e a interação com o usuário. Isso ajuda a manter o código mais organizado e facilita a manutenção, pois a lógica de controle do formulário fica centralizada em um único lugar, e o componente pode se concentrar em exibir as informações de forma clara e eficiente sem misturar a lógica de negócio com a lógica de apresentação.
export class UserInfosContainerComponent
  extends UserFormController
  implements OnChanges, OnInit
{
  currentTabIndex: number = 1;
  userFormValueChangesSubscription!: Subscription;

  @Input({ required: true }) userSelected: IUser = {} as IUser;
  @Input({ required: true }) isInEditMode: boolean = false;

  @Output('onFormStatusChange') onFormStatusChangeEmitt =
    new EventEmitter<boolean>();

  @Output('onUserFormFirstChange') onUserFormFirstChangeEmitt =
    new EventEmitter<void>();

  private readonly _countriesService = inject(CountriesService);
  private readonly _statesService = inject(StatesService);

  countriesList: ICountry[] = [];
  statesList: IState[] = [];

  ngOnChanges(changes: SimpleChanges) {
    this.currentTabIndex = 0;

    const HAS_USER_CHANGED =
      changes['userSelected'] &&
      Object.keys(changes['userSelected'].currentValue).length > 0;

    if (HAS_USER_CHANGED) {
      if (this.userFormValueChangesSubscription)
        this.userFormValueChangesSubscription.unsubscribe();

      this.fullfillUserForm(this.userSelected);

      this.onUserFormFirstChange();

      this.getStatesList(this.userSelected.country);
    }
  }

  ngOnInit() {
    this.getCountriesList();
    this.onUserFormStatusChange();
  }

  private onUserFormFirstChange() {
    this.userFormValueChangesSubscription = this.userForm.valueChanges
      .pipe(take(1))
      .subscribe(() => this.onUserFormFirstChangeEmitt.emit());
  }

  private onUserFormStatusChange() {
    this.userForm.statusChanges
      .pipe(distinctUntilChanged())
      .subscribe(() => this.onFormStatusChangeEmitt.emit(this.userForm.valid));
  }

  onCountrySelected(selectedCountryName: string) {
    this.getStatesList(selectedCountryName);
  }

  mostrarUserFormValue() {
    console.log('userForm', this.userForm);
  }

  private getStatesList(country: string) {
    this._statesService
      .getStates(country)
      .pipe(take(1))
      .subscribe((statesList: IState[]) => {
        this.statesList = statesList;
      });
  }
  private getCountriesList() {
    this._countriesService
      .getCountries()
      .pipe(take(1))
      .subscribe((countries) => {
        this.countriesList = countries;
      });
  }
}
