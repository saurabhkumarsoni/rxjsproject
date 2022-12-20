import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/service/design-utility.service';
import { toArray, take } from 'rxjs/operators';
@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {
  constructor(private designUtilityService: DesignUtilityService) { }
  sourceSub: Subscription;
  userData: any;
  users = [ {name: 'saurabh', skill: 'Angular'},
    {name: 'sonali', skill: 'Java'},
    {name: 'suman', skill: 'Mainframe'},
    {name: 'sandhya', skill: 'Node'},
    {name: 'surabhi', skill: 'Teblu'},
    {name: 'abhishek', skill: 'Data Base'},
    {name: 'Raj', skill: 'React'},
  ]
  ngOnInit(): void {
    //Example 1
    const source = interval(1000);
    this.sourceSub = source.pipe(
      take(10),
      toArray()
    )
    .subscribe(res =>{
      console.log('Example 1',res);
      this.designUtilityService.print(res, 'containerId1');
    })
    //Example 2
    const source2 = from(this.users)
    source2.pipe(
      toArray()
    )
    .subscribe(res =>{
      console.log('example 2', res);
      this.userData = res;
    })
    // Example 3
    const source3 = of('saurabh', 'kumar', 'soni')
    source3.pipe(toArray())
    .subscribe(res =>{
      console.log('Example 3', res);
      this.designUtilityService.print(res, 'containerId3');
    })
  }
  openModal(content: any) {
    this.designUtilityService.open(content);
  }

}
