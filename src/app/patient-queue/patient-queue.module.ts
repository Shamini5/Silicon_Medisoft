import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientQueuePageRoutingModule } from './patient-queue-routing.module';

import { PatientQueuePage } from './patient-queue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientQueuePageRoutingModule
  ],
  declarations: [PatientQueuePage]
})
export class PatientQueuePageModule {}
