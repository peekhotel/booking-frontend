import { Component, OnInit } from '@angular/core';
import {ActivePageChanger} from '../active-page-changer';
import {ActivePageService} from '../active-page/active-page.service';

@Component({
  selector: 'app-infom',
  templateUrl: './infom.component.html',
  styleUrls: ['./infom.component.css']
})
export class InfomComponent extends ActivePageChanger implements OnInit {
  Infom = ` Вартість номера або місця включає дворазове харчування.\n
      Діти до 5 років поселяються безкоштовно без претензій на послуги.\n
      Діти від 5 до 12 років - знижка на проживання з харчуванням 20%.`;
  constructor( PageService: ActivePageService ) {
    super('InfoMoney', PageService);
  }

  ngOnInit() {
  }

}
