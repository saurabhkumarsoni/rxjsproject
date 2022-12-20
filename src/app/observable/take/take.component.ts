import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, timer } from 'rxjs';
import { map, take, takeLast, takeUntil } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {

  constructor(private designUtilityService: DesignUtilityService) { }
  names = ['saurabh', 'suman', 'aman', 'sonali', 'surbhi', 'sandhya', 'aradhya', 'neeta', 'mita'];

  ngOnInit(): void {
    // example 1
    const source = from(this.names);
    source.pipe(
      take(4)
    )
    .subscribe(res =>{
      this.designUtilityService.print(res, 'containerId')
    })
    // example 2
    source.pipe(
      takeLast(4)
    )
    .subscribe(res =>{
      console.log(res);
      this.designUtilityService.print(res, 'containerId2');
    })
    // example 3
    const sourceList = interval(1000);
    const condition = timer(6000);
    const condition2 = fromEvent(document, 'click');
    sourceList.pipe(
      map(res => 'Number ' + res),
      takeUntil(condition2)
    )
    .subscribe(res =>{
      console.log(res);
      this.designUtilityService.print(res, 'containerId3')
    })
  }
  openModal(content: any) {
    this.designUtilityService.open(content);
  }

}
