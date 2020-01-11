import { Injectable } from '@angular/core';
import {Moment} from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DatepickerService {

  private arrivalDate: Moment | null = null;


  getArrivalDate(): Moment | null {
    return this.arrivalDate == null ? null : this.arrivalDate.clone();
  }

  setArrivalDate(date: Moment) {
    this.arrivalDate = date;
  }


  isSelected = (): boolean => this.getArrivalDate() != null;


  constructor() { }
}
