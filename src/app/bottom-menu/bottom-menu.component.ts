import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navfooter',
  templateUrl: './bottom-menu.component.html',
  styleUrls: ['./bottom-menu.component.css']
})
export class BottomMenuComponent implements OnInit {
  WebPik = 'pikhotel.com';
  Information = ' Адрес: Закарпатська область\n Рахівський р-н Ясіня \n полонина Драгобрат Пік готель';
  contact = 'Контакти';
  InfoM = '  pikhotel@gmail.com';
  InfoN = '  +380503735947';

  constructor() { }

  ngOnInit() {
  }

}
