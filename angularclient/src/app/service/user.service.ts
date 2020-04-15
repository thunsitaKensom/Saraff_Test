
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';


@Injectable()
export class UserService {

  private usersUrl: string;
  private checkUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
    this.checkUrl = 'http://localhost:8080/check';
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }

  public check(user: User) {
    return this.http.post<User>(this.checkUrl, user);
  }
}