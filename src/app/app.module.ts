import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatIconModule, MatFormFieldModule, MatInputModule, MatChipsModule, MatProgressBarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { TimeTrackerComponent } from './time-tracker/time-tracker.component';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    TimeTrackerComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatProgressBarModule,
    DatePipe,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
