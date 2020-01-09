import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import {FormsModule} from '@angular/forms';
import { NavfooterComponent } from './navfooter/navfooter.component';
import { TopComponent } from './top/top.component';
import { OrderComponent } from './order/order.component';
import { InfomComponent } from './infom/infom.component';
import { InfohComponent } from './infoh/infoh.component';
import { ReservComponent } from './reserv/reserv.component';



@NgModule({
  declarations: [
    AppComponent,
    NavfooterComponent,
    TopComponent,
    OrderComponent,
    InfomComponent,
    InfohComponent,
    ReservComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    DlDateTimeDateModule,  // <--- Determines the data type of the model
    DlDateTimePickerModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

