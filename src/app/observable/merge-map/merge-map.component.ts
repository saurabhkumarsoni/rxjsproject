import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit {

  constructor(private designUtilityService: DesignUtilityService) { }

  getData(data: string) {
    return of(data + 'Video Uploaded')
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
     // Ex -02 | Map + Merge All
     source.pipe(
      map(res => this.getData(res)),
      mergeAll()
    )
    .subscribe(res =>{
      console.log('Map + Merge All' , res);
      this.designUtilityService.print(res, 'container2')
    })
     // Ex -03 | MergeMap
     source.pipe(
      mergeMap(res =>  of(res + 'Video Uploaded'))
    )
    .subscribe(res =>{
      console.log('MergeMap' , res)
      this.designUtilityService.print(res, 'container3')
    })


    const firstObs$ = of('saurabh');
    const secondObjs$ = of('kumar');

    const finalObs$ = firstObs$.pipe(
      mergeMap(res1 => secondObjs$.pipe(map(res2 => res1 + res2)))
    )
    .subscribe(res => console.log('final obs',res))




  }
  openModal(content: any) {
    this.designUtilityService.open(content);
  }

}
