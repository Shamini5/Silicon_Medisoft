import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PatientAccountPage } from './patient-account.page';

describe('PatientAccountPage', () => {
  let component: PatientAccountPage;
  let fixture: ComponentFixture<PatientAccountPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PatientAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
