import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/service/design-utility.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit, AfterViewInit {
  
  constructor(private designUtilityService: DesignUtilityService, private modalService: NgbModal) { }
  @ViewChild('addBtn')
  addBtn!: ElementRef;
  closeResult = '';
  ngOnInit(): void {
  }
  ngAfterViewInit(){
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res =>{
      let getValue = 'video' + count++
      console.log(getValue);
      this.designUtilityService.print(getValue, 'containerId1');
      this.designUtilityService.print(getValue, 'containerId2')
    })
  }
  openModal(content: any) {
    this.designUtilityService.open(content);
  }


}
