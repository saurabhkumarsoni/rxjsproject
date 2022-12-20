import { Injectable } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { ErrorService } from './error.service';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {
  closeResult = '';
  exclusive = new Subject<boolean>();
  // subject
  // userName = new Subject<string>();
  // BehaviorSubject
  userName = new BehaviorSubject<string>('saurabh');

  videoEmit = new ReplaySubject<string>(3)
  
  constructor( private modalService: NgbModal, private http: HttpClient, private errorService: ErrorService) { }

  print(val: any, containerId: any){
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(containerId)?.appendChild(el);
  }
  print2(val: any, containerId: any){
    let el = document.createElement('div');
    el.setAttribute('class', 'item');
    el.innerHTML = val;
    document.getElementById(containerId)?.prepend(el);
  }
  open(content: any) {
    this.modalService.open(content, { size: 'lg', backdrop: 'static' } ).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    
  }
  

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  getListUser(){
    return this.http.get('https://jsonplaceholder.typicode.com/users',)
  }
  getAllProduct(){
    return this.http.get<any>('https://fakestoreapi.com/poducts').pipe(
      catchError(this.errorService.errorHandle)
    )
  }
}
