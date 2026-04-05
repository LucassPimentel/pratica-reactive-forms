import { Component, Input } from '@angular/core';
import { IDependent } from 'src/app/interfaces/user/dependent.interface';

@Component({
  selector: 'app-dependents-list',
  templateUrl: './dependents-list.component.html',
  styleUrls: ['./dependents-list.component.scss'],
})
export class DependentsListComponent {
  @Input({ required: true }) dependents: IDependent[] | undefined = [];
}
