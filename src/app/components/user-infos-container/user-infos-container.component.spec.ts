import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfosContainerComponent } from './user-infos-container.component';

describe('UserInfosContainerComponent', () => {
  let component: UserInfosContainerComponent;
  let fixture: ComponentFixture<UserInfosContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserInfosContainerComponent]
    });
    fixture = TestBed.createComponent(UserInfosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
