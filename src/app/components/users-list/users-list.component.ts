import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from 'src/app/interfaces/user/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {
  userSelectedIndex: number | undefined;

  @Input({ required: true }) users: IUser[] = [];
  @Input({ required: true }) isInEditMode: boolean = false;

  @Output('onUserSelected') onUserSelectedEmitt = new EventEmitter<number>();

  onUserSelected(index: number) {
    if (this.isInEditMode) {
      return;
    }
    this.userSelectedIndex = index;
    this.onUserSelectedEmitt.emit(index);
  }
}
