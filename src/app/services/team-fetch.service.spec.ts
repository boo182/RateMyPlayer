import { TestBed, inject } from '@angular/core/testing';

import { TeamFetchService } from './team-fetch.service';

describe('TeamFetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamFetchService]
    });
  });

  it('should be created', inject([TeamFetchService], (service: TeamFetchService) => {
    expect(service).toBeTruthy();
  }));
});
