import { TestBed, inject } from '@angular/core/testing';

import { XwinService } from './xwin.service';

describe('XwinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XwinService]
    });
  });

  it('should be created', inject([XwinService], (service: XwinService) => {
    expect(service).toBeTruthy();
  }));
});
