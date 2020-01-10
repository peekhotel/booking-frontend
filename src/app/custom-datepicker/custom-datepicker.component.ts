import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import * as moment from 'moment';
import {Moment} from 'moment';

/** @title Datepicker selected value */
@Component({
  selector: 'app-datepicker',
  templateUrl: 'custom-datepicker.component.html',
  styleUrls: ['custom-datepicker.component.css']
})
export class DatepickerValueComponent {
  private today: Moment = moment();

  private arrivalDateControl = new FormControl();
  private departingDateControl = new FormControl();

  private getArrivalDate(): Moment | null {
    const arrivalDateRef: Moment | null = this.arrivalDateControl.value as Moment;
    return arrivalDateRef == null ? null : arrivalDateRef.clone();
  }
  private arrivalAfterDays = (daysCount: number): Moment => this.getArrivalDate().add(daysCount, 'days');

  getMinimalLeaveDate = (): Moment  => this.arrivalAfterDays(2);
  getMaximalLeaveDate = (): Moment  => this.arrivalAfterDays(30);
  arrivalSelected     = (): boolean => this.getArrivalDate() !== null;

  clearDeparting() {
    this.departingDateControl.reset();
  }
}


