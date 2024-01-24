import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateDoctorAccountPage } from './create-doctor-account.page';

describe('CreateDoctorAccountPage', () => {
  let component: CreateDoctorAccountPage;
  let fixture: ComponentFixture<CreateDoctorAccountPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateDoctorAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
