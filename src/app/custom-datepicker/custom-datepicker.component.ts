import {Component} from '@angular/core';
import {ArrivalDateComponent} from './arrival-date/arrival-date.component';
import {DepartingDateComponent} from './departing-date/departing-date.component';
import {DatepickerService} from './datepicker.service';

/** @title Datepicker selected value */
@Component({
  selector: 'app-datepicker',
  templateUrl: 'custom-datepicker.component.html',
  styleUrls: ['custom-datepicker.component.css'],
  animations: [
    ArrivalDateComponent.animation,
    DepartingDateComponent.animation
  ]
})
export class DatepickerValueComponent {
  private datepickerService: DatepickerService;


  isSelected = (): boolean => this.datepickerService.isSelected();

  constructor(datepickerService: DatepickerService) {
    this.datepickerService = datepickerService;
  }
}

