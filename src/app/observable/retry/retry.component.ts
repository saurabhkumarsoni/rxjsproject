import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { delay, retry, retryWhen, scan } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {
  userListData: [];
  constructor(private designUtilityService: DesignUtilityService, private spinner: NgxSpinnerService,private toastr: ToastrService) { }
  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
    this.userList();
  }
  userList(){
    this.spinner.show();
    this.designUtilityService.getListUser().pipe(
      // retry(3)
      retryWhen(err => err.pipe(
        delay(3000),
        scan((retryCount) =>{
          if(retryCount >= 5){
            throw err
          }else{
            retryCount = retryCount + 1;
            console.log('retryCount' + retryCount);
            return retryCount;
          }
        }, 0)
      ))
    )
    .subscribe((res: any) =>{
      this.userListData = res;
      console.log('user data', this.userListData)
      this.toastr.success('User List have been fetched', '');
    },
    (err) =>{
      console.log(err);
      this.toastr.error('Something went wrong');
    })
  }
  openModal(content: any) {
    this.designUtilityService.open(content);
  }
}
