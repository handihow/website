import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdSecretDialogComponent } from './third-secret-dialog.component';

describe('ThirdSecretDialogComponent', () => {
  let component: ThirdSecretDialogComponent;
  let fixture: ComponentFixture<ThirdSecretDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdSecretDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdSecretDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
