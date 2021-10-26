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
  daylicarte:any=[];
  readonly baseURL='http://localhost:3050/api/dayli'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor( public http: HttpClient) { }

  postdayli(dayli:Daylicarte){
    return this.http.post(this.baseURL,dayli,this.httpOptions);
    console.log(dayli);
    

  }
  putdayli(dayli: Daylicarte) {
    return this.http.put(this.baseURL + `/${dayli._id}`, dayli);
  }
   getdayliList() {
    return this.http.get(this.baseURL);
  }

 

  deletedayli(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
