import { Component, OnDestroy, OnInit } from '@angular/core';
import { observable, Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit, OnDestroy {

  constructor(private designUtilityService: DesignUtilityService) { }
  techStatus: any;
  techStatus2: any;
  subs: Subscription;
  names: any;
  nameStatus: any;
  ngOnInit(): void {
    // example 1
    const customObservable = Observable.create((observer: any) =>{
      setTimeout(() =>{
        observer.next('Angular');
      }, 1000);
      setTimeout(() =>{
        observer.next('React');
      }, 2000);
      setTimeout(() =>{
        observer.next('Java');
      }, 4000);
      setTimeout(() =>{
        observer.next('Node');
      }, 6000);
      setTimeout(() =>{
        observer.next('Data Base');
        // observer.error(new Error('Limit Exceed'))
        observer.complete();
        
      }, 8000);
    }).subscribe((res: any) =>{
      // console.log(res);
      this.designUtilityService.print(res, 'conatinerId1')
    },
    (err: any) =>{
      this.techStatus = 'error'
    },
    () =>{
      this.techStatus = 'completed'
    });

    // Example 2
    const arr2 = ['Angular', 'React', 'Java', 'Python', 'HTML/CSS', 'Typescript'];
    const obs2 = Observable.create((observer: any) =>{
      let count = 0;
      setInterval(()=>{
        observer.next(arr2[count]);
        if(count >= 3){
          observer.error('error emit');
        }
        if(count >= 5){
          observer.complete()
        }
        count++;
      },1000)
    })
    this.subs = obs2.subscribe((res: any) =>{
      this.designUtilityService.print(res, 'containerId2')
    },
    (err: any) =>{
      this.techStatus2 = 'error'
    },
    () =>{
      this.techStatus2 = 'completed'
    })
    // example 3
    const arr3 =  ['Anup', 'Saurabh', 'Sharma', 'John', 'Alex', 'Sonali', 'Robert', 'Alok'];
    const cusObs3 = Observable.create((observer: any) =>{
      let count = 0;
     setInterval(()=>{
        observer.next(arr3[count]);
        if(count >=2){
          // observer.error('error emit')
        }
        if(count >=5){
          observer.complete();
        }
        count++
      }, 1000)
    })
    cusObs3.subscribe((res: any) =>{
      console.log(res);
      this.names =res;
    },
    (err: any) =>{
      this.nameStatus = 'error'
    },
    () =>{
      this.nameStatus = 'completed'
    })
  }
  openModal(content: any) {
    this.designUtilityService.open(content);
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

}
