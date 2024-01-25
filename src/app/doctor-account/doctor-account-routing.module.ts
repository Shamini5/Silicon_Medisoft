import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorAccountPage } from './doctor-account.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorAccountPageRoutingModule {}
