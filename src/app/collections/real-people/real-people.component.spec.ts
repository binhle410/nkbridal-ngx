import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealPeopleComponent } from './real-people.component';

describe('RealPeopleComponent', () => {
  let component: RealPeopleComponent;
  let fixture: ComponentFixture<RealPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
