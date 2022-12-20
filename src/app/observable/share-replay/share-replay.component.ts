import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.css']
})
export class ShareReplayComponent implements OnInit {
  URL = 'https://fakestoreapi.com/products'

  allProducts: Observable<any>;
  mensClothing: Observable<any>
  womenClothing: Observable<any>
  electronics: Observable<any>
  jewelery: Observable<any>
  constructor(private designUtilityService: DesignUtilityService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getList();
  }
  openModal(content: any) {
    this.designUtilityService.open(content);
  }
  getList(){
    this.allProducts =  this.http.get(this.URL).pipe(
      shareReplay()
    )
    this.electronics = this.allProducts.pipe(
      map(res => res.filter((electronicItem: any) =>{
        return electronicItem['category'] ==  'electronics'
      }))
    )
    this.electronics = this.allProducts.pipe(
      map(res => res.filter((electronicItem: any) =>{
        return electronicItem['category'] ==  'electronics'
      }))
    )
    this.jewelery = this.allProducts.pipe(
      map(res => res.filter((jewelery: any) =>{
        return jewelery['category'] ==  'jewelery'
      }))
    )
    this.mensClothing = this.allProducts.pipe(
      map(res => res.filter((mensClothing: any) =>{
        return mensClothing['category'] ==  "men's clothing"
      }))
    )
    this.womenClothing = this.allProducts.pipe(
      map(res => res.filter((womenClothing: any) =>{
        return womenClothing['category'] ==  "women's clothing"
      }))
    )
    
  }

}
