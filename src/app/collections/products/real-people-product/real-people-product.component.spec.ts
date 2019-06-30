import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealPeopleProductComponent } from './real-people-product.component';

describe('RealPeopleProductComponent', () => {
  let component: RealPeopleProductComponent;
  let fixture: ComponentFixture<RealPeopleProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealPeopleProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealPeopleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
