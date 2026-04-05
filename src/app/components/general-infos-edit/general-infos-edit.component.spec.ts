import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInfosEditComponent } from './general-infos-edit.component';

describe('GeneralInfosEditComponent', () => {
  let component: GeneralInfosEditComponent;
  let fixture: ComponentFixture<GeneralInfosEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralInfosEditComponent]
    });
    fixture = TestBed.createComponent(GeneralInfosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
