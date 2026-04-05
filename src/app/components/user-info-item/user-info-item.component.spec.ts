import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoItemComponent } from './user-info-item.component';

describe('UserInfoItemComponent', () => {
  let component: UserInfoItemComponent;
  let fixture: ComponentFixture<UserInfoItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserInfoItemComponent]
    });
    fixture = TestBed.createComponent(UserInfoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
