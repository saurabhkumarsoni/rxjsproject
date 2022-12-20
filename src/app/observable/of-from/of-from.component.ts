import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {

  constructor(private designUtilityService: DesignUtilityService) { }
  obsMsg: any;
  asPromise: any;
  sourceString: any;
  ngOnInit(): void {
    const obs1 = of(1, 2, 3, 4, 5, 6);
    obs1.subscribe(res =>{
      console.log(res);
      this.designUtilityService.print(res,'containerId1')
    })
    const obs2 = of({ name: 'Brian', id: 2, department: 'IT', salary:232323, Buddy: 'saurabh', RM: 'Neeraj', company: 'EPAM' }).subscribe(res =>{
      console.log(res);
      this.obsMsg = res;
    })
    // From example 1
    const fromObs1 = from([1,2,3,4,5,6]).subscribe(res =>{
      console.log(res);
      this.designUtilityService.print(res, 'containerIdFrom')
    })
    // From example 2
    const promiseSource = from(new Promise(resolve => {
      resolve('Hello Saurabh, How are you, how is doing , stay safe and enjoy your coding, lean coding as much as possible because you have enogh time to spend on these new technology, you are good in angular but you have to polish your skills what you')
    })).subscribe(res =>{
      console.log(res);
      this.asPromise = res;
    })
    // from Example 3
    const source = from(['saurabh', 'kumar', 'soni']).subscribe(res =>{
      console.log('res', res)
      this.designUtilityService.print(res, 'containerIdFrom2')
    })
    // example 4
   const str = from('hello wolrd');
   str.subscribe(res =>{
     console.log('string', res);
     this.designUtilityService.print(res, 'containerIdFrom3')
   })
  }
  openModal(content: any) {
    this.designUtilityService.open(content);
  }

}
