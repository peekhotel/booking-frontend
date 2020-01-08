import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatepickermoduleModule } from './datepickermodule/datepickermodule.module';
// import {matDatepickerAnimations} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    BottomNavComponent,
    TopBarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DatepickermoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
