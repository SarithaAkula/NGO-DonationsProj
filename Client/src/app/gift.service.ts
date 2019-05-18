import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DonationsService } from './donations.service';

@Injectable({
  providedIn: 'root'
})
export class GiftService {
  public donationTypes = [];
  constructor(private router:Router, private _donationsService: DonationsService) { }
  
}
