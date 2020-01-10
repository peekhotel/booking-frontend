import { Component, OnInit } from '@angular/core';
import {ActivePageService} from '../active-page/active-page.service';
import {ActivePageChanger} from '../active-page-changer';


@Component({
  selector: 'app-infoh',
  templateUrl: './info-hotel.component.html',
  styleUrls: ['./info-hotel.component.css']
})
export class InfoHotelComponent extends ActivePageChanger implements OnInit {
  InfoH = `    Готель має 14 комфортабельних номерів і розрахований на 48 осіб.\n
 Всі номери оснащені сучасним обладнанням , IP- телебаченням , новими меблями і
 звичайно санвузлами. Є сауна з кімнатою для відпочинку , Wi -Fi Інтернет - у холі готелю.\n
 \nweb З детальною інформацією про готель Ви можете ознайомитись на нашоми сайті pikhotel.com.\n
 \naccess_time Час поселення з 1300. Виїзд - 1200.`;
  constructor( PageService: ActivePageService ) {
    super('InfoHotel', PageService);
  }

  ngOnInit() {
  }

}
