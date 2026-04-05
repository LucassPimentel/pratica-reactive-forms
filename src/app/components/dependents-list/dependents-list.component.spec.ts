import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependentsListComponent } from './dependents-list.component';

describe('DependentsListComponent', () => {
  let component: DependentsListComponent;
  let fixture: ComponentFixture<DependentsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DependentsListComponent]
    });
    fixture = TestBed.createComponent(DependentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
