import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.css']
})
export class BottomNavComponent implements OnInit {
  information = 'Peak Hotel' + '\n' +
    'Polonyna Dragobrat' + '\n' +
    'village Yasinia' + '\n' +
    'Rakhiv district' + '\n' +
    'Zakarpatskyi region';
  constructor() { }

  ngOnInit() {
  }

}
