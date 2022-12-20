import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
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
