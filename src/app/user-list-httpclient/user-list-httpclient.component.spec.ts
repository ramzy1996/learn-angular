import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListHttpclientComponent } from './user-list-httpclient.component';

describe('UserListHttpclientComponent', () => {
  let component: UserListHttpclientComponent;
  let fixture: ComponentFixture<UserListHttpclientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserListHttpclientComponent]
    });
    fixture = TestBed.createComponent(UserListHttpclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
