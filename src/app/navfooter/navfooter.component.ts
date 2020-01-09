import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navfooter',
  templateUrl: './navfooter.component.html',
  styleUrls: ['./navfooter.component.css']
})
export class NavfooterComponent implements OnInit {
  WebPik = 'pikhotel.com';
  Information = 'Адрес:  Закарпатська область\n     Рахівський р-н Ясіня\n   полонина Драгобрат\nПік готель';
  contact = 'Контакти';
  InfoM = '  pikhotel@gmail.com';
  InfoN = '  +380503735947';

  constructor() { }

  ngOnInit() {
  }

}
