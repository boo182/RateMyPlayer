import { TestBed, inject } from '@angular/core/testing';

import { PlayerFetchService } from './player-fetch.service';

describe('PlayerFetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerFetchService]
    });
  });

  it('should be created', inject([PlayerFetchService], (service: PlayerFetchService) => {
    expect(service).toBeTruthy();
  }));
});
