import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSecretDialogComponent } from './second-secret-dialog.component';

describe('SecondSecretDialogComponent', () => {
  let component: SecondSecretDialogComponent;
  let fixture: ComponentFixture<SecondSecretDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondSecretDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondSecretDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
