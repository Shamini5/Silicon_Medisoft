import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  createaccountId: number | undefined; 
  
  formData = {
    name: "",
    phone: "",
    password: "",
    dob: "",
    gender: "",
    location: ""
  }

  constructor(private activatedRoute: ActivatedRoute) { 
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.createaccountId = +params['id'];
      console.log(this.createaccountId);
      this.getCreateaccountData();
    });
  }
 
  getCreateaccountData(){
    axios.get(`http://localhost:8080/create_account.php?createaccountId=${this.createaccountId}`).then(
      (response) => {
        console.log(response.data);
        this.formData = {
          name: response.data[0].name,
          phone: response.data[0].phone,
          password: response.data[0].password,
          dob: response.data[0].dob,
          gender: response.data[0].gender,
          location: response.data[0].location
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  edit(){
    console.log(this.formData);
    this.formData['edit'] = true;
    this.formData['createaccountId'] = this.createaccountId;
    axios.post("http://localhost:8080/create_account.php", this.formData)
    .then(
      (response) => {
        console.log(response.data); 
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
