import { Component, OnInit } from '@angular/core';
import {Moment} from 'moment';
import {DatepickerService} from '../datepicker.service';
import {animate, AnimationTriggerMetadata, style, transition, trigger} from '@angular/animations';
import {AnimatedDatePicker} from '../animated-date-picker';

@Component({
  selector: 'app-departing-date',
  templateUrl: './departing-date.component.html',
  styleUrls: ['./departing-date.component.css']
})
export class DepartingDateComponent extends AnimatedDatePicker implements OnInit {

  static animation: AnimationTriggerMetadata = trigger('slide-right', [
    transition(':enter', [
      style({transform: `translateX(-40%)`}),
      animate('200ms ease-in', style({transform: 'translateX(0%)'}))
    ])
  ]);

  private arrivalAfterDays = (daysCount: number): Moment =>
    this.datepickerService.getArrivalDate().add(daysCount, 'days');

  getMinimalLeaveDate = (): Moment  => this.arrivalAfterDays(2);
  getMaximalLeaveDate = (): Moment  => this.arrivalAfterDays(30);

  constructor(datepickerService: DatepickerService) {
    super(datepickerService);
  }

  ngOnInit() {
  }

}
