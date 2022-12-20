import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatAll, concatMap, delay, map, mergeMap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-concate-map',
  templateUrl: './concate-map.component.html',
  styleUrls: ['./concate-map.component.css']
})
export class ConcateMapComponent implements OnInit {

  constructor(private designUtilityService: DesignUtilityService) { }

  getData(data: string) {
    return of(data + 'Video Uploaded').pipe(delay(2000))
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
     // Ex -02 | Map + Concat All
     source.pipe(
      mergeMap(res => this.getData(res))
    )
    .subscribe(res =>{
      console.log('Map + Merge All' , res);
      this.designUtilityService.print(res, 'container2')
    })
     // Ex -03 | concatMap
     source.pipe(
      concatMap(res => this.getData(res))
    )
    .subscribe(res =>{
      console.log('MergeMap' , res);
      this.designUtilityService.print(res, 'container3')
    })

  }
  openModal(content: any) {
    this.designUtilityService.open(content);
  }

}
