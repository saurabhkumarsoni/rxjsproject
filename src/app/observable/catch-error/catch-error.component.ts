import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.css']
})
export class CatchErrorComponent implements OnInit {
  allProducts:any
  constructor(private designUtilityService: DesignUtilityService, private toster: ToastrService) { }

  ngOnInit(): void {
    this.productList()
  }
  productList(){
   this.designUtilityService.getAllProduct().subscribe(res =>{
    this.allProducts =  res
   },(err) =>{
     console.log(err);
     throw Error(err)
    //  this.toster.error('Something went wrong')
   })
  }
  openModal(content: any) {
    this.designUtilityService.open(content);
  }

}
