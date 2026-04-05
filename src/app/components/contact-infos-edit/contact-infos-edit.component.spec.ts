import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInfosEditComponent } from './contact-infos-edit.component';

describe('ContactInfosEditComponent', () => {
  let component: ContactInfosEditComponent;
  let fixture: ComponentFixture<ContactInfosEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactInfosEditComponent]
    });
    fixture = TestBed.createComponent(ContactInfosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
