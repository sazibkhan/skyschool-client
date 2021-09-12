import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsignupUpdateProfileComponent } from './adminsignup-update-profile.component';

describe('AdminsignupUpdateProfileComponent', () => {
  let component: AdminsignupUpdateProfileComponent;
  let fixture: ComponentFixture<AdminsignupUpdateProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsignupUpdateProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsignupUpdateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
