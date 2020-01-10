import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { BottomMenuComponent } from './bottom-menu/bottom-menu.component';
import { TopComponent } from './top-menu/top-menu.component';
import { OrderComponent } from './order/order.component';
import { InfomComponent } from './infom/infom.component';
import { InfoHotelComponent } from './info-hotel/info-hotel.component';
import { ReservComponent } from './reserv/reserv.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BottomMenuComponent,
    TopComponent,
    OrderComponent,
    InfomComponent,
    InfoHotelComponent,
    ReservComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    DlDateTimeDateModule,  // <--- Determines the data type of the model
    DlDateTimePickerModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

