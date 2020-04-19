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
  saveBookUrl: string;
  updateBookUrl: string;
  deleteBookUrl: string;


  constructor(private http: HttpClient) {
    this.viewBookUrl = 'http://localhost:8080/viewBook';
    this.listBookUrl = 'http://localhost:8080/books';
    this.saveBookUrl = 'http://localhost:8080/book/save';
    this.updateBookUrl = 'http://localhost:8080/book/update';
    this.deleteBookUrl = 'http://localhost:8080/book/delete';
  }

  public list(username: String): Observable<Book[]> {
    return this.http.post<Book[]>(this.listBookUrl + '/' + username, username);
  }

  public view(id: String) {
    return this.http.post<Book>(this.listBookUrl + '/' + id, id);
  }

  public save(book: Book) {
    //book.Id = ""
    console.log(book)
    var data = { username: book.Username, bookName: book['bookName'], author: book['author'], year: book['year'], bookDetail: book['bookDetail'], id: "" }
    console.log(data)
    return this.http.post<Book>(this.saveBookUrl, data);
  }

  public update(book: Book) {
    return this.http.post<Book>(this.updateBookUrl, book);
  }

  public delete(book: Book) {
    //book.Id = ""
    console.log(book)
    var book_id = { id: book['Id'] }
    //console.log(book.Id)
    return this.http.post<Book>(this.deleteBookUrl, book);
  }
}

