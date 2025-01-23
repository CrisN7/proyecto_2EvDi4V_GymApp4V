import { TestBed } from '@angular/core/testing';

import { ActivitiesGroupedByDateService } from './activities-grouped-by-date.service';

describe('ActivitiesGroupedByDateService', () => {
  let service: ActivitiesGroupedByDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivitiesGroupedByDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
