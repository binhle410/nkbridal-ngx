import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UncategorisedProductComponent } from './uncategorised.component';

describe('UncategorisedComponent', () => {
  let component: UncategorisedProductComponent;
  let fixture: ComponentFixture<UncategorisedProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UncategorisedProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UncategorisedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
