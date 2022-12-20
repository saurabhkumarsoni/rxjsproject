import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private designUtilityService: DesignUtilityService) { }
  data: any;
  data2: any;
  data3: any;
  users = [
    {
      id: 1,
      name: 'saurabh',
      skill: 'Angular',
      job: 'Frontend Developer',
      gender: 'Male'
    },
    {
      id: 2,
      name: 'suman',
      skill: 'java',
      job: 'Hadoop Developer',
      gender: 'Female'
    },
    {
      id: 3,
      name: 'sonali',
      skill: 'spring boot',
      job: 'Backedend Developer',
      gender: 'Male'
    },
    {
      id: 4,
      name: 'sandhya',
      skill: 'react',
      job: 'Bigdata Developer',
      gender: 'Female'
    },
    {
      id: 5,
      name: 'Madhusudhan',
      skill: 'react',
      job: 'Java Developer',
      gender: 'Male'
    },
    {
      id: 6,
      name: 'Visheshwar',
      skill: 'react',
      job: 'UI Developer',
      gender: 'Male'
    },
    {
      id: 7,
      name: 'Indrajeet',
      skill: 'react',
      job: 'React Developer',
      gender: 'Female'
    }
  ]
  ngOnInit(): void {
    const source = from(this.users);
    // example 1
    source.pipe(
      filter(data => data.name.length > 6),
      toArray()
    )
    .subscribe(res =>{
      console.log(res);
      this.data = res;
    })
    // example 2
    source.pipe(
      filter(data => data.gender == 'Male'),
      toArray()
    )
    .subscribe(res =>{
      console.log(res);
      this.data2 = res;
    })
    // example 3
    source.pipe(
      filter(data => data.id <=5),
      toArray()
    )
    .subscribe(res =>{
      console.log(res);
      this.data3 =res;
    })
  }
  openModal(content: any) {
    this.designUtilityService.open(content);
  }
}
