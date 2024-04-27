import { TestBed } from '@angular/core/testing';

import { RoadRiskService } from './road-risk.service';

describe('RoadRiskService', () => {
  let service: RoadRiskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoadRiskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
