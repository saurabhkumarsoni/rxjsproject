import { Component, OnInit } from '@angular/core';
import { from, merge, of } from 'rxjs';
import { concatMap, delay, map, mergeMap, switchAll, switchMap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {

  constructor(private designUtilityService: DesignUtilityService) { }

  getData(data: string) {
    return of(data + 'Video Uploaded').pipe(delay(1000))
  }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    // Ex -01 | Map
    source.pipe(
      map(res => this.getData(res))
    )
    .subscribe(res =>{
      console.log('Map' , res);
      this.designUtilityService.print(res, 'container1')
    })
     // Ex -02 | Map + Switch All
     source.pipe(
      map(res => this.getData(res)),
      switchAll()
    )
    .subscribe(res =>{
      console.log('Map + Switch All' , res);
      this.designUtilityService.print(res, 'container2')
    })
     // Ex -03 | SwitchMap
     source.pipe(
      switchMap(res => this.getData(res))
    )
    .subscribe(res =>{
      console.log('switchMap' , res);
      this.designUtilityService.print(res, 'container3')
    })




    // differences with example
     // Ex -01 | concatMap
     source.pipe(
      concatMap(res => this.getData(res))
    )
    .subscribe(res =>{
      console.log('concatMap' , res);
      this.designUtilityService.print(res, 'container4')
    })
     // Ex -02 | MergeMap
     source.pipe(
      mergeMap(res => this.getData(res))
    )
    .subscribe(res =>{
      console.log('MergeMap' , res);
      this.designUtilityService.print(res, 'container5')
    })
     // Ex -03 | SwitchMap
     source.pipe(
      switchMap(res => this.getData(res))
    )
    .subscribe(res =>{
      console.log('SwitchMap' , res);
      this.designUtilityService.print(res, 'container6')
    })

  }
  openModal(content: any) {
    this.designUtilityService.open(content);
  }
}
