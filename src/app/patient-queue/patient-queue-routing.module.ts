import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientQueuePage } from './patient-queue.page';

const routes: Routes = [
  {
    path: '',
    component: PatientQueuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientQueuePageRoutingModule {}
