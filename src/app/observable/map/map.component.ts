import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private designUtilityService: DesignUtilityService) { }
  mgs1: any;
  mgs2: any;
  sub1: Subscription;
  sub2: Subscription;
  ngOnInit(): void {
    const broadCastVideos = interval(1000);
    this.sub1 = broadCastVideos.pipe(
      map(data => 'video ' + data)
    ) 
    .subscribe(res =>{ 
      this.mgs1 = res;
    })
    setTimeout(() =>{
      this.sub1.unsubscribe();
    }, 10000)
    // example 2
    this.sub2 = broadCastVideos.pipe(
      map(data => data + 10)
    )
    .subscribe(res =>{
      this.mgs2 = res;
    })
    setTimeout(() =>{
      this,this.sub2.unsubscribe();
    }, 10000)

    // example 3
    const members = from([{ id: 1, name: 'saurabh' },
     { id: 2, name: 'suman' }, { id: 3, name: 'sandhya' }, { id: 4, name: 'surbhi' },
    { id: 5, name: 'sonali' }, { id: 6, name: 'sidhi' }, { id: 7, name: 'naman' },
     { id: 8, name: 'laksha' }, { id: 9, name: 'ananya' }
    ])
    members.pipe(
      map(data => data.name)
    )
    .subscribe(res =>{
      this.designUtilityService.print(res, 'containerId')
    })
  }
  openModal(content: any) {
    this.designUtilityService.open(content);
  }

}
