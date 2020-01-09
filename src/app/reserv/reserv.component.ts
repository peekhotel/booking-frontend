import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserv',
  templateUrl: './reserv.component.html',
  styleUrls: ['./reserv.component.css']
})
export class ReservComponent implements OnInit {
  selectedDate: any;
  isEditb = false;
  showInfob() {
    this.isEditb = !this.isEditb;
  }
  constructor() { }

  ngOnInit() {
  }

}
