import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppointmentSchPage } from './appointment-sch.page';

describe('AppointmentSchPage', () => {
  let component: AppointmentSchPage;
  let fixture: ComponentFixture<AppointmentSchPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppointmentSchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
