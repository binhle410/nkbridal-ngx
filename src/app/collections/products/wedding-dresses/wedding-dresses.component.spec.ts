import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingDressesComponent } from './wedding-dresses.component';

describe('WeddingDressesComponent', () => {
  let component: WeddingDressesComponent;
  let fixture: ComponentFixture<WeddingDressesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingDressesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingDressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
