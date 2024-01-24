import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorloginScreenPageRoutingModule } from './doctorlogin-screen-routing.module';

import { DoctorloginScreenPage } from './doctorlogin-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorloginScreenPageRoutingModule
  ],
  declarations: [DoctorloginScreenPage]
})
export class DoctorloginScreenPageModule {}
