import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {
  obsMsg: any;
  videoSubscription: Subscription;
  constructor(private designUtilityService: DesignUtilityService) { }
 
  ngOnInit(): void {
    let broadCastVideo = interval(1000);
    this.videoSubscription = broadCastVideo.subscribe((res)=>{
      console.log(res);
      this.obsMsg = 'video' + res;
      this.designUtilityService.print(this.obsMsg, 'containerId1');
      this.designUtilityService.print(this.obsMsg, 'containerId2');
      this.designUtilityService.print(this.obsMsg, 'containerId3');
      if(res>=5){
        this.videoSubscription.unsubscribe();
      }
    })
  }
  openModal(content: any) {
    this.designUtilityService.open(content);
  }



}
