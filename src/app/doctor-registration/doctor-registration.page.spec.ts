import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoctorRegistrationPage } from './doctor-registration.page';

describe('DoctorRegistrationPage', () => {
  let component: DoctorRegistrationPage;
  let fixture: ComponentFixture<DoctorRegistrationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DoctorRegistrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
