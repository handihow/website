import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSecretDialogComponent } from './first-secret-dialog.component';

describe('FirstSecretDialogComponent', () => {
  let component: FirstSecretDialogComponent;
  let fixture: ComponentFixture<FirstSecretDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstSecretDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstSecretDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
