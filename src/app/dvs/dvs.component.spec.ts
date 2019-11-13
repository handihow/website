import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvsComponent } from './dvs.component';

describe('DvsComponent', () => {
  let component: DvsComponent;
  let fixture: ComponentFixture<DvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
