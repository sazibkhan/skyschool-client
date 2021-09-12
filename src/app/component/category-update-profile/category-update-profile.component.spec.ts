import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryUpdateProfileComponent } from './category-update-profile.component';

describe('CategoryUpdateProfileComponent', () => {
  let component: CategoryUpdateProfileComponent;
  let fixture: ComponentFixture<CategoryUpdateProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryUpdateProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryUpdateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
