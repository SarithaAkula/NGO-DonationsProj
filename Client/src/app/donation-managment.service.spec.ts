import { TestBed } from '@angular/core/testing';

import { DonationManagmentService } from './donation-managment.service';

describe('DonationManagmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DonationManagmentService = TestBed.get(DonationManagmentService);
    expect(service).toBeTruthy();
  });
});
