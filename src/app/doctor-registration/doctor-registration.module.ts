import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorRegistrationPageRoutingModule } from './doctor-registration-routing.module';

import { DoctorRegistrationPage } from './doctor-registration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorRegistrationPageRoutingModule
  ],
  declarations: [DoctorRegistrationPage]
})
export class DoctorRegistrationPageModule {}
