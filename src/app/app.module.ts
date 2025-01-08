import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalenderPageComponent } from './Front-End/views/pages/calender-page/calender-page.component';

import { FullCalendarModule } from '@fullcalendar/angular';
import { EventFormPageComponent } from './Front-End/views/pages/event-form-page/event-form-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CalenderPageComponent,
    EventFormPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
