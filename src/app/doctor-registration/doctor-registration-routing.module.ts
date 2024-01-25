import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorRegistrationPage } from './doctor-registration.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorRegistrationPageRoutingModule {}
