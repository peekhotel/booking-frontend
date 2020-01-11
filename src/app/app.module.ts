import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatepickerValueComponent } from './custom-datepicker/custom-datepicker.component';
import {MatDatepickerModule, MatFormFieldModule, MatGridListModule, MatInputModule} from '@angular/material';

import {ReactiveFormsModule} from '@angular/forms';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import { ArrivalDateComponent } from './custom-datepicker/arrival-date/arrival-date.component';
import { DepartingDateComponent } from './custom-datepicker/departing-date/departing-date.component';
// import {matDatepickerAnimations} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    BottomNavComponent,
    TopBarComponent,
    DatepickerValueComponent,
    ArrivalDateComponent,
    DepartingDateComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatMomentDateModule,
    MatInputModule,
    ReactiveFormsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
