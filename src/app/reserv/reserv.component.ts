import { Component, OnInit } from '@angular/core';
import {ActivePageChanger} from '../active-page-changer';
import {ActivePageService} from '../active-page/active-page.service';

@Component({
  selector: 'app-reserv',
  templateUrl: './reserv.component.html',
  styleUrls: ['./reserv.component.css']
})
export class ReservComponent extends ActivePageChanger implements OnInit {
  selectedDate: any;
  isEditb = false;
  showInfob() {
    this.isEditb = !this.isEditb;
  }
  constructor( PageService: ActivePageService ) {
    super('InfoReserv', PageService);
  }

  ngOnInit() {
  }

}
