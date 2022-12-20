import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css']
})
export class DebounceTimeComponent implements OnInit, AfterViewInit {
  @ViewChild('searchTerm') searchTerm: ElementRef<any>
  @ViewChild('searchTerm2') searchTerm2: ElementRef<any>
  searchedItem: any
  searchedItem2: any;
  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    // example 1
    let source = fromEvent<any>(this.searchTerm.nativeElement, 'keyup');
    source.pipe(
      map(event => event.target.value),
      debounceTime(1000)
    ).subscribe(res =>{
      console.log(res);
      this.searchedItem = res;
    })
    // example 2
    let source2 = fromEvent<any>(this.searchTerm2.nativeElement, 'keyup');
    source2.pipe(
      map(event => event.target.value),
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe(res =>{
      console.log(res);
      this.searchedItem2 = res;
    })
  }
  openModal(content: any) {
    this.designUtilityService.open(content);
  }

}
