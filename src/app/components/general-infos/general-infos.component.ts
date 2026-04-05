import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/interfaces/user/user.interface';

@Component({
  selector: 'app-general-infos',
  templateUrl: './general-infos.component.html',
  styleUrls: ['./general-infos.component.scss'],
})
export class GeneralInfosComponent {
  @Input({ required: true }) user: IUser | undefined = {} as IUser;
}
