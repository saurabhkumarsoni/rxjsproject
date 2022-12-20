import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {
  myColor: string;
  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
    // example 1
    const arr = ['saurabh', 'suman', 'aman', 'sonali', 'surbhi', 'sandhya'];
    const source = interval(2000);
    let obsSubcription: Subscription;
    obsSubcription = source.pipe(
      tap(res =>{
        if(res === 4){
          obsSubcription.unsubscribe();
        }
      }),
      map(res => arr[res])
    )
    .subscribe(res =>{
      console.log(res);
      this.designUtilityService.print(res, 'containerId')
    })
    // example 2
    const color = ['Red', 'Blue', 'Yellow', 'Green', 'Volvet', 'Orange', 'Purple'];
    let obsSubcription2: Subscription;
    obsSubcription2 = source.pipe(
      tap(res =>{
        this.myColor = color[res];
        if(res ===7){
          obsSubcription2.unsubscribe();
        }
      }),
      map(res => color[res])
    )
    .subscribe(res =>{
      console.log(res);
      this.designUtilityService.print(res, 'containerId2')
    })
  }
  openModal(content: any) {
    this.designUtilityService.open(content);
  }


} 
