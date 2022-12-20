import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { combineLatest, fromEvent } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class CombineLatestComponent implements OnInit, AfterViewInit {

 @ViewChild('name') name: ElementRef;
 @ViewChild('color') color: ElementRef;
  nameSource = ['Anup', 'Saurabh', 'Sharma', 'John', 'Alex', 'Sonali', 'Robert', 'Alok'];
  colorSource =['Red', 'Blue', 'Yellow', 'Green', 'Volvet', 'Orange', 'Purple'];


  constructor() { }

  ngOnInit(): void {


  }
  ngAfterViewInit(){
    const nameObs$ =  fromEvent<any>(this.name.nativeElement, 'change').pipe(
      map(event => event.target.value)
    )

    const colorObs$ = fromEvent<any>(this.color.nativeElement, 'change').pipe(
      map(event => event.target.value)
    )

    // example 1
    combineLatest(nameObs$, colorObs$).subscribe(([name, color]) =>{
      console.log(name, color)
      this.CreateBox(name, color, 'container1')
    })

    // exmaple 2

  nameObs$.pipe(withLatestFrom(colorObs$)).subscribe(([name, color]) =>{
    console.log(name, color);
    this.CreateBox(name, color, 'container2')
  })

    
  

     
   

  }

  CreateBox(name: any, color: any, containerId: any){
    const el = document.createElement('div');
    el.innerText =name;
    el.setAttribute("class", color);
    document.getElementById(containerId)?.appendChild(el)

  }

}
