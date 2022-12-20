import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
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
