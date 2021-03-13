import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShopAndProductsFormComponent } from './add-shop-and-products-form.component';

describe('AddShopAndProductsFormComponent', () => {
  let component: AddShopAndProductsFormComponent;
  let fixture: ComponentFixture<AddShopAndProductsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShopAndProductsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShopAndProductsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
