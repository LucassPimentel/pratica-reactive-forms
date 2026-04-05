import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { PipesModule } from '../pipes/pipes.module';
import { UsersListComponent } from './users-list/users-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GeneralInfosComponent } from './general-infos/general-infos.component';
import { UserInfoItemComponent } from './user-info-item/user-info-item.component';
import { ContactInfosComponent } from './contact-infos/contact-infos.component';
import { PhoneListComponent } from './contact-infos/components/phone-list/phone-list/phone-list.component';
import { AddressListComponent } from './contact-infos/components/address-list/address-list/address-list.component';
import { DependentsListComponent } from './dependents-list/dependents-list.component';
import { ButtonsContainerComponent } from './buttons-container/buttons-container.component';
import { UserInfosContainerComponent } from './user-infos-container/user-infos-container.component';
import { GeneralInfosEditComponent } from './general-infos-edit/general-infos-edit.component';
import { ContactInfosEditComponent } from './contact-infos-edit/contact-infos-edit.component';
import { PhoneListEditComponent } from './contact-infos-edit/components/phone-list-edit/phone-list-edit.component';
import { AddressListEditComponent } from './contact-infos-edit/components/address-list-edit/address-list-edit.component';
import { DependentsListEditComponent } from './dependents-list-edit/dependents-list-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    UsersListComponent,
    GeneralInfosComponent,
    UserInfoItemComponent,
    ContactInfosComponent,
    PhoneListComponent,
    AddressListComponent,
    DependentsListComponent,
    ButtonsContainerComponent,
    UserInfosContainerComponent,
    GeneralInfosEditComponent,
    ContactInfosEditComponent,
    PhoneListEditComponent,
    AddressListEditComponent,
    DependentsListEditComponent,
    ConfirmationDialogComponent,
  ],
  imports: [
    AngularMaterialModule,
    PipesModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
  ],
  exports: [
    UsersListComponent,
    GeneralInfosComponent,
    ContactInfosComponent,
    DependentsListComponent,
    ButtonsContainerComponent,
    UserInfosContainerComponent,
  ],
  providers: [
    provideNgxMask(),
  ]
})
export class ComponentsModule {}
