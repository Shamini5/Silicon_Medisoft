import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoctorloginScreenPage } from './doctorlogin-screen.page';

describe('DoctorloginScreenPage', () => {
  let component: DoctorloginScreenPage;
  let fixture: ComponentFixture<DoctorloginScreenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DoctorloginScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
