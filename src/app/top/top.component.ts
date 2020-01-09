import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
