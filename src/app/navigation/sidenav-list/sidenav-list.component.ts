import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ActivePageChanger} from '../../active-page-changer';
import {ActivePageService} from '../../active-page/active-page.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class  SidenavListComponent extends ActivePageChanger implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  IDate = 'Бронювання';
  InfoHotel = 'Готель';
  InfoMoney = 'Інформація про знижки';
  reservation = 'Інформація';
  numberinfo = 'Ціни на номера';

  constructor( PageService: ActivePageService ) {
    super(null, PageService);
  }

  ngOnInit() {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
