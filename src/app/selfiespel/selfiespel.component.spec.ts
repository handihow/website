import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfiespelComponent } from './selfiespel.component';

describe('SelfiespelComponent', () => {
  let component: SelfiespelComponent;
  let fixture: ComponentFixture<SelfiespelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfiespelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfiespelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
