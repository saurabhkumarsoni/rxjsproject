import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private toasterService: ToastrService) { }
  errorHandle(err: HttpErrorResponse){
    debugger;
    let errMsg ='';
   
    if(err.status === 404){
   
      errMsg = '404 product not found';

      this.toasterService.error(errMsg);
      console.log(errMsg);
    }else{
      
    } return throwError(errMsg)
  }
}
