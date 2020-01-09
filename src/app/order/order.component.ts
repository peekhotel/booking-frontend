import { Component, OnInit } from '@angular/core';
import {ActivePageChanger} from '../active-page-changer';
import {ActivePageService} from '../active-page/active-page.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent extends ActivePageChanger implements OnInit {
  Order = `  Бронювання здійснюється електронною поштою або телефоном.
      Адміністрація готелю просить Вас вказувати дати, бажані номери, кількість дорослих та дітей. Обов'язково - телефонний номер і e-mail.
      Підтвердженням бронювання є електронний лист.
      Бронювання відбувається після отримання передоплати.
      Анулювання замовлення
      У випадку анулювання замовлення не пізніше за 30 днів до дати прибуття готель повертає передоплату за винятком вартості першої ночі проживання.
      У випадку анулювання замовлення або зміни параметрів бронювання пізніше зазначеного терміну, або у випадку не заїзду передоплата не повертається.
      Щоб анулювати бронювання, напишіть електронній лист на e-mail: pikhotel@gmail.com`;

  constructor( PageService: ActivePageService ) {
    super('Order', PageService);
  }
  ngOnInit() {
  }

}
