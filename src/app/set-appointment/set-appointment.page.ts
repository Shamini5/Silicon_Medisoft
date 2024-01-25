import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns/format';
import { parseISO } from 'date-fns/parseISO';

@Component({
  selector: 'app-set-appointment',
  templateUrl: './set-appointment.page.html',
  styleUrls: ['./set-appointment.page.scss'],
})
export class SetAppointmentPage {
  pickerView = false;
  dateValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
  newString = '';
  constructor() { 
    this.setToday();
  }
   
  ngOnInit() {
  }

  setToday(){
    this.newString = format(parseISO(format(new Date(),'yyyy-MM-dd') + 'T09:00:00.000Z'), 'MMM d, yyyy');
  }

  dateChanged(value){
    this.dateValue = value;
    this.newString = format(parseISO(value), 'MMM d, yyyy');
    this.pickerView = false;
  }

}
