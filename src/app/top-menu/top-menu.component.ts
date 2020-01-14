import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivePageService} from '../active-page/active-page.service';
import {ActivePageChanger} from '../active-page-changer';

@Component({
  selector: 'app-top',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css'],
})
export class TopComponent extends ActivePageChanger implements OnInit {
  constructor( PageService: ActivePageService ) {
    super(null, PageService);
  }

  @Output() public sidenavToggle = new EventEmitter();

  Name = 'Пік Готель';
  IDate = 'Бронювання';
  InfoHotel = 'Готель';
  InfoMoney = 'Інформація про знижки';
  reservation = 'Інформація';
  geticonpik = '../assets/image/method-draw-image (1).svg';
  sidenav: any;

  ngOnInit() {
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
}
}

