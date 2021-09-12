import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsignupListComponent } from './adminsignup-list.component';

describe('AdminsignupListComponent', () => {
  let component: AdminsignupListComponent;
  let fixture: ComponentFixture<AdminsignupListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsignupListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsignupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
