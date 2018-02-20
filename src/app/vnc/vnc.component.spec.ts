import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VncComponent } from './vnc.component';

describe('VncComponent', () => {
  let component: VncComponent;
  let fixture: ComponentFixture<VncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
