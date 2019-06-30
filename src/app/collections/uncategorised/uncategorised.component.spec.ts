import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UncategorisedComponent } from './uncategorised.component';

describe('UncategorisedComponent', () => {
  let component: UncategorisedComponent;
  let fixture: ComponentFixture<UncategorisedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UncategorisedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UncategorisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
