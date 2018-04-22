import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { isNullOrUndefined } from 'util';
import { DatePipe } from '@angular/common';
import { interval } from 'rxjs/observable/interval';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  running = false;
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
  // Create an Observable that will publish a value on an interval
  timer: any;
  subscription: any;
  // timer: any;

  startTask(): void{
    this.running = true;
    
    this.seconds = Number(localStorage.getItem(this.taskDescription+'_seconds_data'));
    this.sixthHourMinute = Number(localStorage.getItem(this.taskDescription+'_sixthMinute_data'));
    this.hour = Number(localStorage.getItem(this.taskDescription+'_hour_data'));
    // this.timeStart = Number(localStorage.getItem(this.taskDescription+'_data'));
    // console.log('timestart before check: '+this.timeStart);    
    // localStorage.setItem(this.taskDescription+'_data' , Date.now().toString());
    // console.log('timeToCompare: '+ this.timeToCompare);
    // console.log('timeStart: ' + this.timeStart);
    
    // var timeDiff = this.timeStart - this.timeToCompare;
    // console.log('timeDiff: ' + timeDiff);

    // this.currentMinutesElapsed = (timeDiff/1000) / 60;

    // this.currentHoursElapsed = this.currentMinutesElapsed / 60;
    
    // this.currentTimeElapsed = timeDiff;

    // var numbers = timer(3000, 1000);
    // numbers.subscribe(x => console.log(x));
    
    // Subscribe to begin publishing values
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
      //disable play button
  }

  stopTask(): void {
    this.running = false;
    //enable play button
    // Create an Observable that will publish a value on an interval
    // this.secondsCounter.unsubscribe();
    this.subscription.unsubscribe();
  }
  
  ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.timer = Observable.timer(0,1000);
}
}


