import { Component, OnInit } from '@angular/core';
import { concat, interval, merge } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css']
})
export class MergeComponent implements OnInit {

  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
    const source1 = interval(3000).pipe(
      map(video => 'Tech Video # ' + video),
      take(5));
    const source2 = interval(4000).pipe(
      map(video => 'Comedy Video # ' + video),
      take(4));
    const source3 = interval(3500).pipe(
      map(video => 'News Video # ' + video),
      take(3))
    const finalSource = merge(source1, source2, source3).subscribe(res =>{
      console.log(res);
      this.designUtilityService.print(res, 'containerId3');
    }) 
  }
  openModal(content: any) {
    this.designUtilityService.open(content);
  }
}
