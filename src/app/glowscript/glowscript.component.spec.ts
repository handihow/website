import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlowscriptComponent } from './glowscript.component';

describe('GlowscriptComponent', () => {
  let component: GlowscriptComponent;
  let fixture: ComponentFixture<GlowscriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlowscriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlowscriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
