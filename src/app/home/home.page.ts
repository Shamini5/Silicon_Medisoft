import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';
import { ToastController } from '@ionic/angular';
import axios from 'axios';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // name: string | undefined;
  // phone: string | undefined;
  createaccount: any = [];
  doctoraccount: any = [];
  constructor(private router: Router, public toastController: ToastController, private navCtrl: NavController) {
      this.getUsers();
      this.getDoctors();
  }

  getUsers(){
    // console.log("work");
    axios.get("http://localhost:8080/create_account.php").then(
      (response) => {
        console.log(response.data);
        this.createaccount = response.data;
      })
      .catch((error) => {
        console.log(error);
      })
  }

  getDoctors(){
    axios.get("http://localhost:8080/doctor_account.php").then(
      (response) => {
        console.log(response.data);
        this.doctoraccount = response.data;
      })
      .catch((error) => {
        console.log(error);
      })
  }

  navigateToEdit(id: number){
    console.log(id);
    this.navCtrl.navigateForward(`/edit/${id}`)
  }

}
