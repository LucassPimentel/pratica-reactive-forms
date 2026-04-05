import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/interfaces/user/user.interface';

@Component({
  selector: 'app-contact-infos',
  templateUrl: './contact-infos.component.html',
  styleUrls: ['./contact-infos.component.scss'],
})
export class ContactInfosComponent {
  @Input({required: true}) user: IUser | undefined = {} as IUser;
}
