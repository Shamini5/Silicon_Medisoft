import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PatientQueuePage } from './patient-queue.page';

describe('PatientQueuePage', () => {
  let component: PatientQueuePage;
  let fixture: ComponentFixture<PatientQueuePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PatientQueuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
