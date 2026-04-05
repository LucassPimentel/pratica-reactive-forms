import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { IDialogConfirmationData } from './interfaces/dialog-confirmation-data.interface';
import { IUser } from './interfaces/user/user.interface';
import { UpdateUserService } from './services/update-user.service';
import { UserFormRawValueService } from './services/user-form-raw-value.service';
import { UsersService } from './services/users.service';
import { ConvertUserFormToUser } from './utils/convert-user-form-to-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  users: IUser[] = [];

  userSelectedIndex: number | undefined;
  userSelected: IUser = {} as IUser;

  isInEditMode: boolean = false;
  enableSaveButton: boolean = false;
  userFormUpdated: boolean = false;

  constructor(
    private readonly _matDialog: MatDialog,
    private readonly _usersService: UsersService,
    private readonly _updateUserService: UpdateUserService,
    private readonly _userFormRawValueService: UserFormRawValueService,
  ) {}

  onUserSelected(userSelectedIndex: number) {
    this.userSelectedIndex = userSelectedIndex;

    const USER_FOUND = this.users[userSelectedIndex];
    if (USER_FOUND) {
      this.userSelectedIndex = userSelectedIndex;
      // esse structuredClone é necessário para criar uma cópia profunda do objeto, evitando que alterações no objeto selecionado afetem o objeto original na lista de usuários
      this.userSelected = structuredClone(USER_FOUND);
    }
  }

  onUserFormFirstChange() {
    this.userFormUpdated = true;
  }

  onEditButton() {
    this.isInEditMode = true;
    this.userSelected = structuredClone(this.userSelected);
  }

  onSaveButton() {
    this.handleConfirmationDialog(
      {
        title: 'Confirmação',
        message: 'Tem certeza que deseja salvar as alterações?',
      },
      (result: boolean) => {
        if (!result) return;

        this.saveUserInfos();

        this.isInEditMode = false;
        this.userFormUpdated = false;
      },
    );
  }

  onCancelButton() {
    if (this.userFormUpdated) {
      this.handleConfirmationDialog(
        {
          title: 'Confirmação',
          message: 'Tem certeza que deseja cancelar as alterações?',
        },
        (result: boolean) => {
          if (!result) return;

          this.userFormUpdated = false;
          this.isInEditMode = false;
        },
      );
    } else {
      this.isInEditMode = false;
    }
  }

  onFormStatusChange(formStatus: boolean) {
    setTimeout(() => {
      this.enableSaveButton = formStatus;
    }, 0);
  }

  ngOnInit() {
    // o take serve para pegar apenas a primeira emissão do observable e depois se desinscrever automaticamente
    this._usersService
      .getUsers()
      .pipe(take(1))
      .subscribe((users) => (this.users = users));
  }

  private handleConfirmationDialog(
    data: IDialogConfirmationData,
    onConfirm: (result: boolean) => void,
  ) {
    const dialogRef = this._matDialog.open(ConfirmationDialogComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe(onConfirm);
  }

  private saveUserInfos() {
    const newUser: IUser = ConvertUserFormToUser(
      this._userFormRawValueService.userFormRawValue,
    );

    this._updateUserService
      .updateUser(newUser)
      .subscribe((updatedUserResponse: IUser) => {
        if (this.userSelectedIndex === undefined) return;
        this.users[this.userSelectedIndex] = updatedUserResponse;
        this.userSelected = structuredClone(newUser);
      });
  }
}
