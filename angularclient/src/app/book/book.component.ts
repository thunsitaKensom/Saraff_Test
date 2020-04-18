import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';
import { Book } from '../model/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Book[];
  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.list()
  }

  list() {
    this.bookService.list(sessionStorage.getItem('username')).subscribe(result => {
      this.books = result;
      (["/index"])
    });

  }
}
