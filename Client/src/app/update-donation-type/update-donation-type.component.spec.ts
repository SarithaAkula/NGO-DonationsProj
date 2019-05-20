import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDonationTypeComponent } from './update-donation-type.component';

describe('UpdateDonationTypeComponent', () => {
  let component: UpdateDonationTypeComponent;
  let fixture: ComponentFixture<UpdateDonationTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDonationTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDonationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
