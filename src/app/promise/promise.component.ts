import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  constructor() { }
  dell = {
    brand: 'Dell',
    color: 'Black',
    hardDisk: '1 TB'
  }
  hp = {
    brand: 'HP',
    color: 'Silver',
    hardDisk: '2 TB'
  }
  notAvail = {
    brand: 'Laptop is not available on store',
    status: 'Failed'
  }
  purchedLaptop: any;
  

  ngOnInit(): void {
    let buyLaptop = new Promise((resolve, reject)=>{
      if(this.getDellLaptop()){
        return setTimeout(()=>{
          return resolve(this.dell);
        },3000)
      } else if(this.getHpLaptop()){
        return setTimeout(()=>{
          return resolve(this.hp);
        },3000)
      }else{
        return setTimeout(()=>{
          return reject(this.notAvail);
        },3000)
      }
      
    });
    buyLaptop.then(res=>{
      console.log('then code => ', res);
      this.purchedLaptop = res;
    }).catch(res=>{
      console.log('catch code => ', res);
      this.purchedLaptop = res;
    })
  }
  getDellLaptop(){
    return false;
  }
  getHpLaptop(){
    return false;
  }
  noLaptopAvail(){
    return true;
  }

}
