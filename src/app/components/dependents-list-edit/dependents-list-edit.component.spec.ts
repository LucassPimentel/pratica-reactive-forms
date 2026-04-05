import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependentsListEditComponent } from './dependents-list-edit.component';

describe('DependentsListEditComponent', () => {
  let component: DependentsListEditComponent;
  let fixture: ComponentFixture<DependentsListEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DependentsListEditComponent]
    });
    fixture = TestBed.createComponent(DependentsListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
