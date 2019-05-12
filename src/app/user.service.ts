import { Injectable } from '@angular/core';
import {User} from './user';
import {Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private apiUrl = 'http://localhost:8080';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/Controller?action=GetUsers`);
  }

  getUser(userId: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/Controller?action=GetUser&userId=${userId}`);
  }

  updateUser(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/Controller?action=UpdateUser`, JSON.stringify(user), httpOptions);
  }

  constructor(
    private http: HttpClient
  ) { }
}
