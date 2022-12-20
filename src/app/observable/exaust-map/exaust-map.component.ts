import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { fromEvent, Observable } from 'rxjs';
import { concatMap, exhaustMap, tap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/service/design-utility.service';
import { SerachService } from 'src/app/service/serach.service';

@Component({
  selector: 'app-exaust-map',
  templateUrl: './exaust-map.component.html',
  styleUrls: ['./exaust-map.component.css']
})
export class ExaustMapComponent implements OnInit,AfterViewInit {
  URL ='https://global-1bb0f.firebaseio.com/exhaustMap.json';
  num = 0;
  data: any;
  public testForm: FormGroup;
  @ViewChild('btn') btn: ElementRef;

  constructor( private spinner: NgxSpinnerService, private http: HttpClient,
    private designUtilityService: DesignUtilityService, private formBuilder: FormBuilder, private service: SerachService, private toastService: ToastrService) { }

  ngOnInit(): void {
    // this.createForm();
    // this.getUserList();
  }
  ngAfterViewInit(){
    fromEvent(this.btn.nativeElement, 'click').pipe(
      tap(() => this.spinner.show()),
      exhaustMap(() => this.onSave(this.num++))
    )
    .subscribe(res =>{
      console.log(res);
      this.onFetch();
      this.spinner.hide()
    })
  }
 
  onSave(changes: number){
    return this.http.put(this.URL, {data: changes})
  }
  onFetch(){
    this.http.get<any>(this.URL).subscribe(res =>{
      this.data = res.data;
      console.log(res.data);
    })
  }
 
 
  // createForm(){
  //   this.testForm = this.formBuilder.group({
  //     title: ["Mr", [Validators.required]],
  //     userId: ['Software Engineer', [Validators.required]],
  //     body: ['Software Engineer Software Engineer Software Engineer Software Engineer']
  //   });
  // }
  // submitForm(): any{
  //   if(this.testForm.valid){
  //     this.service.saveUser(this.testForm.value)
  //   }

  // }
  // getUserList(){
  //   this.service.getUser().subscribe(res =>{
  //     console.log('list', res);
  //   })
  // }
  // clearError(){

  // }
  openModal(content: any) {
    this.designUtilityService.open(content);
  }

}
