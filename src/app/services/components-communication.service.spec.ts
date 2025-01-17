import { TestBed } from '@angular/core/testing';

import { ComponentsCommunicationService } from './components-communication.service';

describe('ComponentsCommunicationService', () => {
  let service: ComponentsCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentsCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
