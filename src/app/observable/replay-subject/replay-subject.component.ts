import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit {

  constructor(private designUtilityService: DesignUtilityService) { }
  user1List =['Angular1', 'Angular 2'];
  user2List: any = [];
  user3List: any = [];

  // subscribeMode
  subscribeMode2: boolean = false;
  subscribeMode3: boolean = false;

  // subscription
  subscruption2: Subscription;
  subscription3: Subscription;

  ngOnInit(): void {
    this.designUtilityService.videoEmit.subscribe((res: any) =>{
      console.log(res);
      this.user1List.push(res);
    })
  }
  openModal(content: any) {
    this.designUtilityService.open(content);
  }
  addVideo(video: any){
    this.designUtilityService.videoEmit.next(video);
    
  }
  // user2Subscribe Button
  user2Subscribe(){
    if(this.subscribeMode2){
      this.subscruption2.unsubscribe();
    } else{
     this.subscruption2 = this.designUtilityService.videoEmit.subscribe(res =>{
        this.user2List.push(res);
      })
    }
    this.subscribeMode2 = !this.subscribeMode2;
  }
  // user3Subscribe button
  user3Subscribe(){
    if(this.subscribeMode3){
      this.subscription3.unsubscribe();
    } else{
     this.subscription3 = this.designUtilityService.videoEmit.subscribe(res =>{
        this.user3List.push(res);
      })
    }
    this.subscribeMode3 = !this.subscribeMode3;
  }

}
