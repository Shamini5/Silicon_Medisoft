import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import axios from 'axios';
import { AlertController, ToastController } from '@ionic/angular';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})

export class CreateAccountPage implements OnInit {
  name: string | undefined;
  phone: string | undefined;
  password: string | undefined;
  dob: string | undefined;
  gender: string | undefined;
  location: string | undefined;

  constructor(private http: HttpClient, private alertController: AlertController) {
  
  }

  

  formData = {
    name: "",
    phone: "",
    password: "",
    dob: "",
    gender: "",
    location: ""
  }

  ngOnInit() {
  }

  async create(){
   console.log(this.formData);
    axios.post("http://localhost:8080/create_account.php", this.formData).then(
      (response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })

        const alert = await this.alertController.create({
          header: 'Data Saved Successfully',
          subHeader: '',
          message: '',
          buttons: ['Ok'],
        });
    
        await alert.present();
      }

  }

