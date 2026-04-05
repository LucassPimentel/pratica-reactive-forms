import { inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhoneTypeEnum } from 'src/app/enums/phone-type.enum';
import { IAddress } from 'src/app/interfaces/user/address.interface';
import { IDependent } from 'src/app/interfaces/user/dependent.interface';
import { IPhone } from 'src/app/interfaces/user/phone.interface';
import { IUser } from 'src/app/interfaces/user/user.interface';
import { UserFormRawValueService } from 'src/app/services/user-form-raw-value.service';
import { convertPtBrDateToDateObj } from 'src/app/utils/convert-pt-br-date-to-date-obj';
import { prepareAddressList } from 'src/app/utils/prepare-address-list';
import { preparePhoneList } from 'src/app/utils/prepare-phone-list';
import { RequiredAddressValidator } from 'src/app/utils/user-form-validators/required-address-validator';

export class UserFormController {
  userForm!: FormGroup;

  // essa abordagem de usar o inject para obter uma instância do FormBuilder é uma forma moderna e recomendada de injetar dependências em classes que não são componentes, diretivas ou serviços. O FormBuilder é uma classe fornecida pelo Angular que facilita a criação de formulários reativos, permitindo criar grupos de controles de forma mais concisa e legível. Ao usar o inject, você pode obter uma instância do FormBuilder sem precisar passar explicitamente como parâmetro no construtor, o que torna o código mais limpo e fácil de manter
  private readonly _formBuilder = inject(FormBuilder);
  private _emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  private readonly _userFormRawValueService = inject(UserFormRawValueService);

  constructor() {
    this.createUserForm();

    this.watchUserFormValueChanges();
  }

  get generalInfosGroup(): FormGroup {
    return this.userForm.get('generalInfos') as FormGroup;
  }

  get phoneList() {
    return this.userForm.get('contactInfos.phoneList') as FormArray;
  }

  get addressList() {
    return this.userForm.get('contactInfos.addressList') as FormArray;
  }

  get dependentsList() {
    return this.userForm.get('dependentsList') as FormArray;
  }

  get generalInfosValid() {
    return this.generalInfosGroup.valid;
  }

  get contactInfosValid() {
    return this.userForm.get('contactInfos')?.valid;
  }

  get dependentInfosValid() {
    return this.dependentsList.valid;
  }

  watchUserFormValueChanges() {
    this.userForm.valueChanges.subscribe(() => {
      this._userFormRawValueService.userFormRawValue =
        this.userForm.getRawValue();
    });
  }

  fullfillUserForm(user: IUser) {
    this.resetUserForm();
    this.fullfillGeneralInfosGroup(user);
    this.fullfillPhoneList(user.phoneList);
    this.fullfillAddressList(user.addressList);
    this.fullfillDependentsList(user.dependentsList);

    this.userForm.markAllAsTouched();
    this.userForm.updateValueAndValidity();
  }

  removeDependent(dependentIndex: number) {
    this.dependentsList.removeAt(dependentIndex);
    this.dependentsList.markAsDirty();
  }

  addDependent() {
    this.dependentsList.push(this.createDependentGroup());
    this.dependentsList.markAsDirty();
  }

  private createDependentGroup(newDepent: IDependent | null = null) {
    if (!newDepent) {
      return this._formBuilder.group({
        name: ['', Validators.required],
        age: ['', Validators.required],
        document: ['', Validators.required],
      });
    }
    return this._formBuilder.group({
      name: [newDepent.name, Validators.required],
      age: [newDepent.age.toString(), Validators.required],
      document: [newDepent.document.toString(), Validators.required],
    });
  }
  // ao separar o form em grupos como generalInfos e contactInfos, eu consigo organizar melhor os campos do formulário, facilitando a leitura e manutenção do código. Além disso, isso permite que eu possa validar cada grupo de forma independente, aplicando regras de validação específicas para cada conjunto de campos, o que torna o formulário mais robusto e fácil de usar
  private createUserForm() {
    this.userForm = this._formBuilder.group({
      generalInfos: this._formBuilder.group({
        name: ['', Validators.required],
        email: [
          '',
          [Validators.required, Validators.pattern(this._emailPattern)],
        ],
        country: ['', Validators.required],
        state: ['', Validators.required],
        maritalStatus: [null, Validators.required],
        monthlyIncome: [null, Validators.required],
        birthDate: [null, Validators.required],
      }),
      contactInfos: this._formBuilder.group({
        phoneList: this._formBuilder.array([]),
        addressList: this._formBuilder.array([]),
      }),
      dependentsList: this._formBuilder.array([]),
    });
  }

  private resetUserForm() {
    this.userForm.reset();
    this.generalInfosGroup.reset();

    this.phoneList.reset();
    this.phoneList.clear();

    this.addressList.reset();
    this.addressList.clear();

    this.dependentsList.reset();
    this.dependentsList.clear();
  }

  private fullfillGeneralInfosGroup(user: IUser) {
    const newUser = {
      ...user,
      birthDate: convertPtBrDateToDateObj(user.birthDate),
    };

    // o patchValue permite passar apenas os campos que eu quero atualizar, sem a necessidade de passar o objeto completo, o que é útil quando eu tenho um formulário grande e quero atualizar apenas uma parte dele. Além disso, o patchValue é mais flexível, pois não exige que todos os campos do grupo sejam preenchidos, ao contrário do setValue, que exige que todos os campos sejam fornecidos
    this.generalInfosGroup.patchValue(newUser);
  }

  private fullfillPhoneList(phoneList: IPhone[]) {
    preparePhoneList(phoneList, false, (phone) => {
      this.phoneList.push(
        this._formBuilder.group({
          type: [phone.type],
          typeDescription: [phone.typeDescription],
          phoneNumber: [
            phone.phoneNumber,
            phone.type === PhoneTypeEnum.MOBILE ? Validators.required : [],
          ],
        }),
      );
    });
  }
  private fullfillDependentsList(dependentsList: IDependent[]) {
    dependentsList.forEach((dependent) => {
      this.dependentsList.push(this.createDependentGroup(dependent));
    });
  }
  private fullfillAddressList(addressList: IAddress[]) {
    prepareAddressList(addressList, false, (address) => {
      this.addressList.push(
        this._formBuilder.group(
          {
            type: [address.type],
            typeDescription: [
              { value: address.typeDescription, disabled: true },
            ],
            street: [address.street],
            complement: [address.complement],
            country: [address.country],
            state: [address.state],
            city: [address.city],
          },
          {
            validators: RequiredAddressValidator,
          },
        ),
      );
    });
  }
}
