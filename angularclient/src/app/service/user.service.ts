
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';


@Injectable()
export class UserService {

  private addUserUrl: string;
  private loginUrl: string;
  private profileUrl: string;
  private userUpdateUrl: string;
  private checkUsernameDuplicateUrl: string;

  constructor(private http: HttpClient) {
    this.addUserUrl = 'http://localhost:8080/user/create';
    this.loginUrl = 'http://localhost:8080/login';
    this.profileUrl = 'http://localhost:8080/profile';
    this.userUpdateUrl = 'http://localhost:8080/user/update';
    this.checkUsernameDuplicateUrl = 'http://localhost:8080/user/duplicate';
  }

  public save(user: User) {
    console.log(this.http.post<User>(this.addUserUrl, user))
    return this.http.post<User>(this.addUserUrl, user);
  }

  public update(user: User) {
    console.log(this.http.post<User>(this.userUpdateUrl, user))
    return this.http.post<User>(this.userUpdateUrl + '/' + sessionStorage.getItem('username'), user);
  }

  public authenticate(username: User["Username"], password: User["Password"]) {
    var data = { username: username, password: password, nickname: "", email: "" }
    return this.http.post<User>(this.loginUrl, data);

  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }

  public profile(username: String) {
    console.log(this.http.post<User>(this.profileUrl + '/' + username, username))
    return this.http.post<User>(this.profileUrl + '/' + username, username);
  }

  public checkUsernameDuplicate(input: any) {
    //console.log(input)
    //console.log(this.http.post<User>(this.profileUrl + '/' + username, username))
    return this.http.get<any>(this.checkUsernameDuplicateUrl + '/' + sessionStorage.getItem('username') + '?input=' + input);
  }


}