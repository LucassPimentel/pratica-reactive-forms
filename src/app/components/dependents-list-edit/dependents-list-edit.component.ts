import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { IDependent } from 'src/app/interfaces/user/dependent.interface';

@Component({
  selector: 'app-dependents-list-edit',
  templateUrl: './dependents-list-edit.component.html',
  styleUrls: ['./dependents-list-edit.component.scss'],
})
export class DependentsListEditComponent {
  @Input({ required: true }) userForm!: FormGroup;

  @Output('onRemoveDependent') onRemoveDependentEmitter =
    new EventEmitter<number>();

  @Output('onAddDependent') onAddDependentEmitter = new EventEmitter<void>();

  get dependentsList() {
    return this.userForm.get('dependentsList') as FormArray;
  }

  removeDependent(dependentIndex: number) {
    this.onRemoveDependentEmitter.emit(dependentIndex);
  }

  addDependent(){
    this.onAddDependentEmitter.emit();
  }
}
