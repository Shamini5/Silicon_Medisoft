import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-patient-account',
  templateUrl: './patient-account.page.html',
  styleUrls: ['./patient-account.page.scss'],
})
export class PatientAccountPage implements OnInit {
  

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async createList(){
    const alert = await this.alertController.create({
      header: 'Data Saved Successfully',
      subHeader: '',
      message: '',
      buttons: ['Ok'],
    });

    await alert.present();

  }

}
