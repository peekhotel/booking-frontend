import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {DatepickerService} from '../datepicker.service';
import {Moment} from 'moment';
import {animate, AnimationTriggerMetadata, state, style, transition, trigger} from '@angular/animations';
import {AnimatedDatePicker} from '../animated-date-picker';


@Component({
  selector: 'app-arrival-date',
  templateUrl: './arrival-date.component.html',
  styleUrls: ['./arrival-date.component.css']
})
export class ArrivalDateComponent extends AnimatedDatePicker implements OnInit {

  static animation: AnimationTriggerMetadata = trigger('slide-left', [
    state('closed', style({})),
    state('open', style({})),
    transition('closed => open', [
      style({transform: 'translateX(40%)'}),
      animate('200ms ease-in', style({transform: 'translateX(0%)'}))
    ])
  ]);

  private today = moment();


  constructor(datepickerService: DatepickerService) {
    super(datepickerService);
  }

  onDatePicked() {
    this.datepickerService.setArrivalDate(this.dateControl.value as Moment);
  }

  ngOnInit() {
  }

}
