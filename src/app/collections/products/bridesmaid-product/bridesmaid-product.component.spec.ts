import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BridesmaidProductComponent } from './bridesmaid-product.component';

describe('BridesmaidProductComponent', () => {
  let component: BridesmaidProductComponent;
  let fixture: ComponentFixture<BridesmaidProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BridesmaidProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BridesmaidProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
