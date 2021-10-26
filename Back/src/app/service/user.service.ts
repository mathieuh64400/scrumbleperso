import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from '../models/user'
 
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
    
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL = "http://localhost:3050/api/user/login ";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  create(post:User): Observable<any> {

    return this.httpClient.post(this.apiURL + '/', JSON.stringify(post), this.httpOptions)

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
