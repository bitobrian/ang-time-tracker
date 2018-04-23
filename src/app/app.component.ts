import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { isNullOrUndefined } from 'util';
import { DatePipe } from '@angular/common';
import { interval } from 'rxjs/observable/interval';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/timer';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  running = false;
  message;
  taskDescription ='My Task';
  currentTimeElapsed;
  timeStart;
  timeToCompare = 1524420100000;
  currentMinutesElapsed;
  currentHoursElapsed;
  seconds=0;
  hour=0;
  sixthHourMinute=0;
  active= false;
  timer: any;
  subscription: any;

  constructor(public snackBar: MatSnackBar) {}

  openSnackBar(input: string) {
    this.snackBar.open(input,'', {duration: 2000});
  }

  startTask(): void{
    this.running = true;

    this.openSnackBar(this.taskDescription+ ' Started');
    
    this.seconds = Number(localStorage.getItem(this.taskDescription+'_seconds_data'));
    this.sixthHourMinute = Number(localStorage.getItem(this.taskDescription+'_sixthMinute_data'));
    this.hour = Number(localStorage.getItem(this.taskDescription+'_hour_data'));

    this.subscription = this.timer.subscribe(n => {
      this.seconds+= 1;
      console.log(this.seconds==360);
      
      if(this.seconds==360){
        this.seconds = 0;
        this.sixthHourMinute += 1;
      }
      if(this.sixthHourMinute==10){
        this.sixthHourMinute = 0;
        this.hour += 1;
      }
      console.log('seconds: ' + this.seconds);
      console.log('sixthMins: ' + this.sixthHourMinute);
      console.log('hour: ' + this.hour);
      localStorage.setItem(this.taskDescription+'_seconds_data' , this.seconds.toString());
      localStorage.setItem(this.taskDescription+'_sixthMinute_data' , this.sixthHourMinute.toString());
      localStorage.setItem(this.taskDescription+'_hour_data' , this.hour.toString());
      
    });
  }

  stopTask(): void {
    this.running = false;
    this.subscription.unsubscribe();
    this.openSnackBar(this.taskDescription+ ' Stopped');
  }
  
  resetTaskData(): void {
    localStorage.setItem(this.taskDescription + '_seconds_data', '');
    localStorage.setItem(this.taskDescription + '_sixthMinute_data', '');
    localStorage.setItem(this.taskDescription + '_hour_data', '');

    this.openSnackBar('Data reset!');
  }

  submitTime(): void {
    this.openSnackBar('Shit dont work');
  }

  ngOnInit(): void {
  this.timer = Observable.timer(0,1000);
}
}


