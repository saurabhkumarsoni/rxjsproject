import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  exclusive: boolean = false;
  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
    this.designUtilityService.exclusive.subscribe(res =>{
      this.exclusive = res;
      console.log("header component called", this.exclusive);
    })
  }

}
