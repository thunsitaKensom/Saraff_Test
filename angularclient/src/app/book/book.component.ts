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
  book_edit: Book;
  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.list()
  }

  getBook(book: Book) {
    console.log(book)
    this.book_edit = book;
    // this.bookService.view(book).subscribe(result => {
    //   this.user = result;
    //   this.userModal = result;
    //   (['/profile'])
    // });
  }


  list() {
    this.bookService.list(sessionStorage.getItem('username')).subscribe(result => {
      this.books = result;
      (["/index"])
    });

  }
}
