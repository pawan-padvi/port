import { HttpClient,HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BASE_URL } from '../../enviroment/global.environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
http = inject(HttpClient);
router = inject(Router);
//get token
token = localStorage.getItem('token');
//set header
 headers = new HttpHeaders({
  'Authorization': `Bearer ${this.token}`,  
  'Content-Type': 'application/json',
});
options = {headers:this.headers}

  constructor() {}
  //post method 
  postData(data: any): Observable<any> {
    return this.http.post<any>(`${BASE_URL}${data.url}`, data.data,this.options); 
  }
  //get method
  getData(data:any):Observable<any>{
    return this.http.get<any>(`${BASE_URL}${data.url}`,this.options);
  }
}
