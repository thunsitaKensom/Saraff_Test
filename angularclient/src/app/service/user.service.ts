
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';


@Injectable()
export class UserService {

  private homeUrl: string;
  private loginUrl: string;

  constructor(private http: HttpClient) {
    this.homeUrl = 'http://localhost:8080/home';
    this.loginUrl = 'http://localhost:8080/login';
  }

  public save(user: User) {
    console.log(this.http.post<User>(this.homeUrl, user))
    return this.http.post<User>(this.homeUrl, user);
  }

  public authenticate(username: User["Username"], password: User["Password"]) {
    var data = { username: username, password: password, nickname: "ad", email: "2" }
    return this.http.post<User>(this.loginUrl, data);

  }


}