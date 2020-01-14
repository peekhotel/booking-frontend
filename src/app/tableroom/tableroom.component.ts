import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ActivePageChanger} from '../active-page-changer';
import {ActivePageService} from '../active-page/active-page.service';

    @Component({
  selector: 'app-tableroom',
  templateUrl: './tableroom.component.html',
  styleUrls: ['./tableroom.component.css']
})
export class TableroomComponent extends ActivePageChanger implements OnInit {
      constructor( PageService: ActivePageService ) {
        super('reservation', PageService);
      }
      displayedColumns: string[] = ['position', 'type', 'numberrooms', 'numberpeople', 'money'];
      dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

      @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

      ngOnInit() {
        this.dataSource.paginator = this.paginator;
      }
    }
export interface PeriodicElement {
  type: string;
  position: number;
  numberrooms: number;
  numberpeople: number;
  money: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, type: 'Двомісний', numberrooms: 4 , numberpeople: 2, money: 1800},
  {position: 2, type: 'Трьомісний', numberrooms: 3 , numberpeople: 3, money: 2500},
  {position: 3, type: 'Комплексний', numberrooms: 2 , numberpeople: 5, money: 3500},
  {position: 4, type: 'Люкс', numberrooms: 2 , numberpeople: 3, money: 3000},
  {position: 5, type: 'Апартаменти', numberrooms: 2 , numberpeople: 4, money: 3000},
  {position: 6, type: 'Апартаменти люкс', numberrooms: 1, numberpeople: 6, money: 4000},
];
