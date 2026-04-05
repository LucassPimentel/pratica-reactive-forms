import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-info-item',
  templateUrl: './user-info-item.component.html',
  styleUrls: ['./user-info-item.component.scss'],
})
export class UserInfoItemComponent {
  @Input() label: string | undefined | null = '';
  @Input() value: string | undefined | null = '';
}
