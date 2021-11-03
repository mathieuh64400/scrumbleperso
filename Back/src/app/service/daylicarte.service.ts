import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  Daylicarte
} from '../models/daylicarte'
@Injectable({
  providedIn: 'root'
})
export class DaylicarteService {
  private apiURL = "http://localhost:3050/api/dayli";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }


  getAll(): Observable<any> {

    return this.httpClient.get(this.apiURL )

    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  create(post:Daylicarte): Observable<any> {

    return this.httpClient.post(this.apiURL, JSON.stringify(post), this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }  
     
  find(_id:string): Observable<any> {

    return this.httpClient.get(this.apiURL + '/' + _id)

    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  update(_id:string, post:Daylicarte): Observable<any> {

    return this.httpClient.put(this.apiURL + '/' + _id, JSON.stringify(post), this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  delete(_id:string){
    return this.httpClient.delete(this.apiURL + '/' + _id, this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }
    


  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}