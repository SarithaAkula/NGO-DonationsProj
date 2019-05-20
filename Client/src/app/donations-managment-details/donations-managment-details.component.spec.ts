import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationsManagmentDetailsComponent } from './donations-managment-details.component';

describe('DonationsManagmentDetailsComponent', () => {
  let component: DonationsManagmentDetailsComponent;
  let fixture: ComponentFixture<DonationsManagmentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationsManagmentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationsManagmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
