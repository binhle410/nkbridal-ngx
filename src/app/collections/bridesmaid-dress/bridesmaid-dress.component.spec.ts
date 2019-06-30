import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BridesmaidDressComponent } from './bridesmaid-dress.component';

describe('BridesmaidDressComponent', () => {
  let component: BridesmaidDressComponent;
  let fixture: ComponentFixture<BridesmaidDressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BridesmaidDressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BridesmaidDressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
