import {Component, OnInit} from '@angular/core';


/** @title Datepicker start date */
@Component({
  selector: 'app-datepicker.component',
  templateUrl: 'datepicker.component.html',
  styleUrls: ['datepicker.component.css'],
})
export class DatepickerComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  ngOnInit() {
  }
}


