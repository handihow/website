import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzappComponent } from './szapp.component';

describe('SzappComponent', () => {
  let component: SzappComponent;
  let fixture: ComponentFixture<SzappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
