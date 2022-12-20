import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, pluck, toArray } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {

  constructor(private designUtilityService: DesignUtilityService) { }
  users = [
    {
      name: 'saurabh',
      skill: 'Angular',
      job: { title: { role: 'bussiness'}, exp: '10 years' }
    },
    {
      name: 'suman',
      skill: 'java',
      job: {  title: { role: 'dr'}, exp: '7 years' }
    },
    {
      name: 'sonali',
      skill: 'spring boot',
      job: { title: { role: 'admin'}, exp: '8 years' }
    },
    {
      name: 'sandhya',
      skill: 'react',
      job: {  title: { role: 'patient'}, exp: '9 years' }
    }
  ]
    data: any
    data2: any;
  ngOnInit(): void {
    // example 1
    from(this.users).pipe(
      // map(data => data.name),
      pluck('name'),
      toArray()
    )
    .subscribe(res =>{
      console.log(res);
      this.data = res;
    })
    // example 2
    from(this.users).pipe(
      // map(data => data.name),
      pluck('job', 'title', 'role'),
      toArray()
    )
    .subscribe(res =>{
      console.log(res);
      this.data2 = res;
    })
  }

  openModal(content: any) {
    this.designUtilityService.open(content);
  }

}
