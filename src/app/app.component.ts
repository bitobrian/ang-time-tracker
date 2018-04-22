import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  running = false;
  taskDescription ='Collab DevEnv';
  currentTimeElapsed = 0.3;
  timeStart;

  startTask(): void{
    this.running = true;
    var storageItem = Number(localStorage.getItem(this.taskDescription+'_data'));
    this.timeStart = Number(localStorage.getItem(this.taskDescription+'_data'));
    console.log('timestart before check: '+this.timeStart);
    console.log('storageItem: '+storageItem);
    
    if(isNullOrUndefined(this.timeStart)){
      localStorage.setItem(this.taskDescription+'_data' , Date.now().toString());  
    }    
  }

  stopTask(): void {
    this.running = false;
  }
}

