import { Component, OnInit } from '@angular/core';
import {ActivePageService} from '../active-page/active-page.service';
import {ActivePageChanger} from '../active-page-changer';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
})
export class TopComponent extends ActivePageChanger implements OnInit {
  Name = 'Пік готель';
  IDate = 'Бронювання';
  InfoHotel = 'Готель';
  InfoMoney = 'Інформація про знижки';
  reservation = 'Необхідна інформація про бронювання';
  geticonidate = '../assets/image/account-card-details-outline.png';
  geticoninfohotel = '../assets/image/home-variant.png';
  geticoninfomoney = '../assets/image/cash.png';
  geticonreserv = '../assets/image/pencil-minus.png';
  geticonpik = '../assets/image/mountains-with-moon.png';
  constructor( PageService: ActivePageService ) {
    super(null, PageService);
  }

  ngOnInit() {
  }

}
