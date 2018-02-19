import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApptoolsComponent } from './apptools.component';

describe('ApptoolsComponent', () => {
  let component: ApptoolsComponent;
  let fixture: ComponentFixture<ApptoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApptoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApptoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
