import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Search } from '../appInterface/serach.interface';

@Injectable({
  providedIn: 'root'
})
export class SerachService {
  URL = 'https://my-json-server.typicode.com/Uxtrendz/apis/videoList'
  URL2 = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http: HttpClient) { }
  
  getSearches(searchTerm: string | undefined): Observable<Search>{
    return this.http.get<Search>(this.URL+'?q='+searchTerm)
  }

  saveUser(data: any){
    debugger;
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
    return this.http.post(this.URL2, data, { headers: reqHeader })
  }

  getUser(){
    return this.http.get(this.URL2);
  }
  
}
