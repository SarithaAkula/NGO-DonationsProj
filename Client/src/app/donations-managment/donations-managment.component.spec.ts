import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationsManagmentComponent } from './donations-managment.component';

describe('DonationsManagmentComponent', () => {
  let component: DonationsManagmentComponent;
  let fixture: ComponentFixture<DonationsManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationsManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationsManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
