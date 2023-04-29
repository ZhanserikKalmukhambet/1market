import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInMyOrdersComponent } from './item-in-my-orders.component';

describe('ItemInMyOrdersComponent', () => {
  let component: ItemInMyOrdersComponent;
  let fixture: ComponentFixture<ItemInMyOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemInMyOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemInMyOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
