import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infoh',
  templateUrl: './infoh.component.html',
  styleUrls: ['./infoh.component.css']
})
export class InfohComponent implements OnInit {
  InfoH = `    Готель має 14 комфортабельних номерів і розрахований на 48 осіб.\n
 Всі номери оснащені сучасним обладнанням , IP- телебаченням , новими меблями і
 звичайно санвузлами. Є сауна з кімнатою для відпочинку , Wi -Fi Інтернет - у холі готелю.\n
 \nweb З детальною інформацією про готель Ви можете ознайомитись на нашоми сайті pikhotel.com.\n
 \naccess_time Час поселення з 1300. Виїзд - 1200.`;
  isEdith = false;
  showInfoH() {
    this.isEdith = !this.isEdith;
  }
  constructor() { }

  ngOnInit() {
  }

}
