import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buttons-container',
  templateUrl: './buttons-container.component.html',
  styleUrls: ['./buttons-container.component.scss'],
})
export class ButtonsContainerComponent {
  @Input({ required: true }) isInEditMode: boolean = false;
  @Output('onEditButton') OnEditButtonEmitt = new EventEmitter<void>();
  @Output('onCancelButton') OnCancelButtonEmitt = new EventEmitter<void>();
  @Output('onSaveButton') OnSaveButtonEmitt = new EventEmitter<void>();
  @Input({ required: true }) enableSaveButton: boolean = false;

  onCancelButton() {
    this.OnCancelButtonEmitt.emit();
  }
  onSaveButton() {
    this.OnSaveButtonEmitt.emit();
  }
  onEditButton() {
    this.OnEditButtonEmitt.emit();
  }
}
