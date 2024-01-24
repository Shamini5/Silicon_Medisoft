import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoctorAccountPage } from './doctor-account.page';

describe('DoctorAccountPage', () => {
  let component: DoctorAccountPage;
  let fixture: ComponentFixture<DoctorAccountPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DoctorAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
