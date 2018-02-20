import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { X11Component } from './x11.component';

describe('X11Component', () => {
  let component: X11Component;
  let fixture: ComponentFixture<X11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ X11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(X11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
