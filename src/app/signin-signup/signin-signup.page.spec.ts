import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SigninSignupPage } from './signin-signup.page';

describe('SigninSignupPage', () => {
  let component: SigninSignupPage;
  let fixture: ComponentFixture<SigninSignupPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SigninSignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
