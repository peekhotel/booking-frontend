import {DatepickerService} from './datepicker.service';
import {AnimationTriggerMetadata} from '@angular/animations';
import {FormControl} from '@angular/forms';


export class AnimatedDatePicker {
  protected datepickerService: DatepickerService;
  protected dateControl: FormControl = new FormControl();

  animation: AnimationTriggerMetadata;

  constructor(datepickerService: DatepickerService) {
    this.datepickerService = datepickerService;
  }
}
