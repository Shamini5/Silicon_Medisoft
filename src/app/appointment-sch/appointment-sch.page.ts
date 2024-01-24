import { Component, OnInit } from '@angular/core';
import { Swiper } from 'swiper';


@Component({
  selector: 'app-appointment-sch',
  templateUrl: './appointment-sch.page.html',
  styleUrls: ['./appointment-sch.page.scss'],
})
export class AppointmentSchPage {

  constructor() { }

  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }

  ngOnInit() {
  }

}
