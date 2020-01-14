import { BrowserModule } from '@angular/platform-browser';
import {EventEmitter, NgModule, Output} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottomMenuComponent } from './bottom-menu/bottom-menu.component';
import { TopComponent } from './top-menu/top-menu.component';
import { OrderComponent } from './order/order.component';
import { InfomComponent } from './infom/infom.component';
import { InfoHotelComponent } from './info-hotel/info-hotel.component';
import { ReservComponent } from './reserv/reserv.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatSidenavModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {ExtendedModule, FlexModule} from '@angular/flex-layout';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { TableroomComponent } from './tableroom/tableroom.component';
import { NumberinfoComponent } from './numberinfo/numberinfo.component';


@NgModule({
  declarations: [
    AppComponent,
    BottomMenuComponent,
    TopComponent,
    OrderComponent,
    InfomComponent,
    InfoHotelComponent,
    ReservComponent,
    SidenavListComponent,
    TableroomComponent,
    NumberinfoComponent,
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ExtendedModule,
    FlexModule,
    MatListModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

