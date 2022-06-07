import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient) { }

  getUsers(){
    return this.httpClient.get('http://localhost:3000/users');
  }

  postUsers(User:any):Observable<any>{
    return this.httpClient.post<any>('http://localhost:3000/users/',User);
  }

}
