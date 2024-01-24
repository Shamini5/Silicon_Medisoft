import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateDoctorAccountPage } from './create-doctor-account.page';

const routes: Routes = [
  {
    path: '',
    component: CreateDoctorAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateDoctorAccountPageRoutingModule {}
