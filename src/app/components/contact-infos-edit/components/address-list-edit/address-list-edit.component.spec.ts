import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressListEditComponent } from './address-list-edit.component';

describe('AddressListEditComponent', () => {
  let component: AddressListEditComponent;
  let fixture: ComponentFixture<AddressListEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddressListEditComponent]
    });
    fixture = TestBed.createComponent(AddressListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
