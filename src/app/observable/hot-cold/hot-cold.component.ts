import { Component, OnInit } from '@angular/core';

import {interval, Observable } from 'rxjs';
import { publish, refCount, subscribeOn, take } from 'rxjs/operators';

@Component({
  selector: 'app-hot-cold',
  templateUrl: './hot-cold.component.html',
  styleUrls: ['./hot-cold.component.css']
})
export class HotColdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  getColdOrUnicast(){
    let observable =  Observable.create((observer: any) => {
      observer.next(Math.random())
    })
    observable.subscribe((data: any) =>{
      console.log('first sub' + data);
    })
    observable.subscribe((data: any) =>{
      console.log('second sub' + data);
    })
  }

  getHotOrMulticast(){
    var source = interval(1000).pipe(
      take(5),
      publish(),
      refCount()
    )
    
    source.subscribe((item: any) => console.log(`first sub: ${item}`));
    setTimeout(() => {
      source.subscribe((item: any) => console.log(`second sub: ${item}`)); 
    }, 2500)

  }
  button1(){
    this.getHotOrMulticast()
  }
  button2(){
    this.getHotOrMulticast()
  }


}
