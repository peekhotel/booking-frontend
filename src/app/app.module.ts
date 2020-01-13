import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatepickerValueComponent } from './custom-datepicker/custom-datepicker.component';
import {MatDatepickerModule, MatFormFieldModule, MatGridListModule, MatInputModule, MatTableModule} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';

import {ReactiveFormsModule} from '@angular/forms';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import { ArrivalDateComponent } from './custom-datepicker/arrival-date/arrival-date.component';
import { DepartingDateComponent } from './custom-datepicker/departing-date/departing-date.component';
import {RoomsTableComponent} from './rooms-table/rooms-table.component';

// import {matDatepickerAnimations} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    BottomNavComponent,
    TopBarComponent,
    DatepickerValueComponent,
    ArrivalDateComponent,
    DepartingDateComponent,
    RoomsTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatMomentDateModule,
    MatInputModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
