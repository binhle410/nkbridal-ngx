import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromFormalDressComponent } from './prom-formal-dress.component';

describe('PromFormalDressComponent', () => {
  let component: PromFormalDressComponent;
  let fixture: ComponentFixture<PromFormalDressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromFormalDressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromFormalDressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
