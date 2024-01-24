import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorloginScreenPage } from './doctorlogin-screen.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorloginScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorloginScreenPageRoutingModule {}
