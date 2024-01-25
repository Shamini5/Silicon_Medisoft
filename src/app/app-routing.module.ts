import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'doctor-registration',
    loadChildren: () => import('./doctor-registration/doctor-registration.module').then( m => m.DoctorRegistrationPageModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'appointment-sch',
    loadChildren: () => import('./appointment-sch/appointment-sch.module').then( m => m.AppointmentSchPageModule)
  },
  {
    path: 'book-appointment',
    loadChildren: () => import('./book-appointment/book-appointment.module').then( m => m.BookAppointmentPageModule)
  },
  {
    path: 'set-appointment',
    loadChildren: () => import('./set-appointment/set-appointment.module').then( m => m.SetAppointmentPageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./message/message.module').then( m => m.MessagePageModule)
  },
  {
    path: 'patient-account',
    loadChildren: () => import('./patient-account/patient-account.module').then( m => m.PatientAccountPageModule)
  },
  {
    path: 'doctor-account',
    loadChildren: () => import('./doctor-account/doctor-account.module').then( m => m.DoctorAccountPageModule)
  },
  
  {
    path: 'signin-signup',
    loadChildren: () => import('./signin-signup/signin-signup.module').then( m => m.SigninSignupPageModule)
  },
  {
    path: 'doctorlogin-screen',
    loadChildren: () => import('./doctorlogin-screen/doctorlogin-screen.module').then( m => m.DoctorloginScreenPageModule)
  },
  {
    path: 'patient-queue',
    loadChildren: () => import('./patient-queue/patient-queue.module').then( m => m.PatientQueuePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
