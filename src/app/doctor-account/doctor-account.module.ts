import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorAccountPageRoutingModule } from './doctor-account-routing.module';

import { DoctorAccountPage } from './doctor-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorAccountPageRoutingModule
  ],
  declarations: [DoctorAccountPage]
})
export class DoctorAccountPageModule {}
