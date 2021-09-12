import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsignupSaveComponent } from './adminsignup-save.component';

describe('AdminsignupSaveComponent', () => {
  let component: AdminsignupSaveComponent;
  let fixture: ComponentFixture<AdminsignupSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsignupSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsignupSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
