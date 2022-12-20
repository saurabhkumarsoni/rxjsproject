import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { from, of } from 'rxjs';
import { concatMap, delay, mergeMap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-concat-map2',
  templateUrl: './concat-map2.component.html',
  styleUrls: ['./concat-map2.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ConcatMap2Component implements OnInit {
  notifyData =[
    {
      name: 'Fcebook',
      icon: '../../../assets/images/fb.PNG',
      time: '4 Second Ago',
      img: '../../../assets/images/ccu.png',
      strong: 'Saurabh Kumar',
      p: 'Commented on your #photSuit Post: Awesome Post !!!! Thanks...'
    },
    {
      name: 'Twitter',
      icon: '../../../assets/images/tw.png',
      time: '8 Second Ago',
      img: '../../../assets/images/love.PNG',
      strong: 'Suman Kumar',
      p: 'Commented on your #photSuit Post: Awesome Post !!!! Thanks...'
    },
    {
      name: 'YouTube',
      icon: '../../../assets/images/you.PNG',
      time: '12 Second Ago',
      img: '../../../assets/images/love.PNG',
      strong: 'Sandhya Kumari',
      p: 'Commented on your #photSuit Post: Awesome Post !!!! Thanks...'
    },
    {
      name: 'Gmail',
      icon: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Gmail.max-1100x1100.png',
      time: '17 Second Ago',
      img: '../../../assets/images/ccu.png',
      strong: 'Sonali',
      p: 'Commented on your #photSuit Post: Awesome Post !!!! Thanks...'
    },
  ]

  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
    from(this.notifyData).pipe(
      concatMap(res => this.getHtml(res))
    )
    .subscribe(res =>{                        // api data
      console.log(res);
      this.designUtilityService.print2(res, 'conatiner');
    })    

  }
  getHtml(data: any){
   return of(`<div class="header">
    <div class="app">
        <img src="${data.icon}" width="20"/>
        ${data.name}
    </div>
    <div class="time">${data.time}</div>
</div>
<div class="body">
    <img src="${data.img}" class="item-img"/>
    <strong>${data.strong}</strong> 
    <p>${data.p}</p>
</div>`).pipe(delay(2000))
  }
  openModal(content: any) {
    this.designUtilityService.open(content);
  }

}
