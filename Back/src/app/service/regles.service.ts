import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Regles} from '../models/regles'
@Injectable({
  providedIn: 'root'
})
export class ReglesService {
  private apiURL = "http://localhost:3050/api/regles";
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
     
  create(post:Regles): Observable<any> {

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
     
  update(_id:string, post:Regles): Observable<any> {

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
