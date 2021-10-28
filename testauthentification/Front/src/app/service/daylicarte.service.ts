import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Daylicarte } from '../model/daylicarte';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

// import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class DaylicarteService {
  selectedDaylicarte:any = {titre: '', contenu: '' };
  daylicarte:Daylicarte[]=[];
  readonly baseURL='http://localhost:3051/api/dayli'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor( public http: HttpClient) { }

  postdayli(dayli:Daylicarte){
    return this.http.post(this.baseURL,dayli,this.httpOptions).pipe(map((res:any)=>{
      return res
    }))
  
  }
  putdayli(dayli: Daylicarte) {
    return this.http.patch(this.baseURL + `/${dayli._id}`, dayli).pipe(map((res:any)=>{
      return res
    }))
  }
   getdayliList() {
    return this.http.get(this.baseURL);
  }
  deletedayli(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
