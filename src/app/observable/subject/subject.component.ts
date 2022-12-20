import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit, OnDestroy {
  userName = 'saurbah';
  constructor(private designUtilityService: DesignUtilityService) { 
    this.designUtilityService.userName.subscribe(res =>{
      this.userName = res;
    })
  }

  ngOnInit(): void {
    this.designUtilityService.exclusive.next(true);
  }
  openModal(content: any) {
    this.designUtilityService.open(content);
  }
  ngOnDestroy(){
    this.designUtilityService.exclusive.next(false);
  }

}
