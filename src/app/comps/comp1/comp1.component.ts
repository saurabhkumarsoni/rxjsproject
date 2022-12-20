import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  // subject
  // userName: string = 'saurabh';
  // behaviorSubject
  userName: string;
  constructor(private designUtilityService: DesignUtilityService) {
    this.designUtilityService.userName.subscribe(res =>{
      this.userName =res;
    })
   }

  ngOnInit(): void {
  }
  onChange(uname: any){
    console.log(uname.value);
    this.designUtilityService.userName.next(uname.value);
  }

}
