import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import axios from 'axios';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-create-doctor-account',
  templateUrl: './create-doctor-account.page.html',
  styleUrls: ['./create-doctor-account.page.scss'],
})
export class CreateDoctorAccountPage implements OnInit {
  formData = {
    name: "",
    phone: "",
    password: "",
    registration: "",
    qualification: "",
    gender: "",
    primary_clinic_add: ""
  }


  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async info(){
    document.querySelector("#docform")?.addEventListener("submit", (e)=>{
      e.preventDefault();

      const name = document.querySelector("#name")?.innerHTML
    })


    // console.log(this.formData);
    // axios.post("http://localhost:8080/doctor_account.php", this.formData)
    // .then(
    //   (response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
       
      const alert = await this.alertController.create({
        header: 'Data Saved Successfully',
        subHeader: '',
        message: '',
        buttons: ['Ok'],
      });
  
      await alert.present();
  
  }
}
