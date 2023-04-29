import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInSellerProductsComponent } from './item-in-seller-products.component';

describe('ItemInSellerProductsComponent', () => {
  let component: ItemInSellerProductsComponent;
  let fixture: ComponentFixture<ItemInSellerProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemInSellerProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemInSellerProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
