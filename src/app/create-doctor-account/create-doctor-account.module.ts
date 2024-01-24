import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateDoctorAccountPageRoutingModule } from './create-doctor-account-routing.module';

import { CreateDoctorAccountPage } from './create-doctor-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateDoctorAccountPageRoutingModule
  ],
  declarations: [CreateDoctorAccountPage]
})
export class CreateDoctorAccountPageModule {}
