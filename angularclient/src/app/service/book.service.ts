import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../model/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  listBookUrl: string;
  viewBookUrl: string;


  constructor(private http: HttpClient) {
    this.viewBookUrl = 'http://localhost:8080/viewBook';
    this.listBookUrl = 'http://localhost:8080/books';
  }

  public list(username: String): Observable<Book[]> {
    return this.http.post<Book[]>(this.listBookUrl + '/' + username, username);
  }

  public view(id: String) {
    return this.http.post<Book>(this.listBookUrl + '/' + id, id);
  }
}
