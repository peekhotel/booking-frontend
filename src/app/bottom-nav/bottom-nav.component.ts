import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.css']
})

export class BottomNavComponent implements OnInit {
  information1 = 'Peak Hotel, Polonyna Dragobrat';
  information2 =  'village Yasinia, Rakhiv district';
  information3 =  'Zakarpatskyi region';
  show = false;
  phonenumber = '+(380) 50 373 5947';
  constructor() { }
  ngOnInit() {
  }
  showMap() {
    this.show = !this.show;
  }
}
