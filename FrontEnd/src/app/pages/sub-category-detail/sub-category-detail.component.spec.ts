import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoryDetailComponent } from './sub-category-detail.component';

describe('SubCategoryDetailComponent', () => {
  let component: SubCategoryDetailComponent;
  let fixture: ComponentFixture<SubCategoryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCategoryDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubCategoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
