import { TestBed, inject } from '@angular/core/testing';

import { ThoughtsService } from './thoughts.service';

describe('ThoughtsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThoughtsService]
    });
  });

  it('should be created', inject([ThoughtsService], (service: ThoughtsService) => {
    expect(service).toBeTruthy();
  }));
});
