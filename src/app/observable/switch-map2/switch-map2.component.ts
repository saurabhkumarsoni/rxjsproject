import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, pluck, switchMap } from 'rxjs/operators';
import { Search } from 'src/app/appInterface/serach.interface';
import { DesignUtilityService } from 'src/app/service/design-utility.service';
import { SerachService } from 'src/app/service/serach.service';

@Component({
  selector: 'app-switch-map2',
  templateUrl: './switch-map2.component.html',
  styleUrls: ['./switch-map2.component.css']
})
export class SwitchMap2Component implements AfterViewInit {
  @ViewChild('serachForm') serachForm: NgForm
  searchTermResults: any;
  searchResultCount: number;

  constructor(private designUtilityService: DesignUtilityService, private searchService: SerachService) { }

  ngAfterViewInit(): void {
   
    const formValue = this.serachForm.valueChanges;
    formValue?.pipe(
      // map(data => data.searchTerm)
      // filter(() => this.serachForm.valid),
      pluck('searchTerm'),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(data => this.searchService.getSearches(data))
    )
    .subscribe(res =>{
      this.searchTermResults = res;
      this.searchResultCount = Object.keys(res).length
    })

  }
  
  openModal(content: any) {
    this.designUtilityService.open(content);
  }

}
