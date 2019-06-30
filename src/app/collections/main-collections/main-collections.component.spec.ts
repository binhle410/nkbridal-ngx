import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCollectionsComponent } from './main-collections.component';

describe('MainCollectionsComponent', () => {
  let component: MainCollectionsComponent;
  let fixture: ComponentFixture<MainCollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCollectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
