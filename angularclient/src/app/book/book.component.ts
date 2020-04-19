import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';
import { Book } from '../model/book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Book[];
  book: Book;
  get_book: Book;
  book_create: Book;

  constructor(
    private router: Router,
    private bookService: BookService
  ) {
    this.book = new Book();
    this.get_book = new Book();
    this.book_create = new Book();
  }

  ngOnInit() {
    this.list()
  }

  getBook(book: Book) {
    console.log(book)
    this.get_book = book;
  }

  list() {
    this.bookService.list(sessionStorage.getItem('username')).subscribe(result => {
      this.books = result;
      (["/index"])
    });
  }

  saveBook() {
    this.book_create.Username = sessionStorage.getItem('username')
    console.log(this.book_create)
    this.bookService.save(this.book_create).subscribe(result => {
      this.router.navigate([(location.reload())])
    });
  }

  updateBook() {
    console.log(this.get_book)
    this.bookService.update(this.get_book).subscribe(result => {
      console.log(this.get_book)
      //this.get_book = result
      this.router.navigate([(location.reload())])
    });
  }

  delete() {
    this.bookService.delete(this.get_book).subscribe(result => {
      this.get_book = result;
      ([(location.reload())])
    });
  }

  /* removeTask(book) {
     book.remove(book);
   }*/



}

