import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-infos-edit',
  templateUrl: './contact-infos-edit.component.html',
  styleUrls: ['./contact-infos-edit.component.scss'],
})
export class ContactInfosEditComponent {
  @Input({ required: true }) userForm!: FormGroup;
}
