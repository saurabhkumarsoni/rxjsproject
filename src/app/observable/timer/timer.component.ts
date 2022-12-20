import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  objMsg: any;
  constructor(private designUtilityService: DesignUtilityService) { }
  broadCastVideoSub: Subscription;
  ngOnInit(): void {
    let broadCastVideo = timer(3000, 1000);
    this.broadCastVideoSub = broadCastVideo.subscribe(res =>{
      console.log(res);
      this.objMsg = 'video ' + res;
      this.designUtilityService.print(this.objMsg, 'containerId1');
      this.designUtilityService.print(this.objMsg, 'containerId2');
      this.designUtilityService.print(this.objMsg, 'containerId3');
      if(res >= 10){
        this.broadCastVideoSub.unsubscribe();
      }
    })
    
  }
  openModal(content: any) {
    this.designUtilityService.open(content);
  }
}
