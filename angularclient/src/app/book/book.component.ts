import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';
import { Book } from '../model/book';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';

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
    private bookService: BookService,
    private userService: UserService
  ) {
    this.book = new Book();
    this.get_book = new Book();
    this.book_create = new Book();
  }

  ngOnInit() {
    if (this.userService.isUserLoggedIn()) {
      this.list()
    } else {
      this.listAllBooks()
    }
  }

  getBook(book: Book) {
    this.get_book["id"] = book["id"];
    this.get_book["bookName"] = book["bookName"];
    this.get_book["bookDetail"] = book["bookDetail"];
    this.get_book["author"] = book["author"];
    this.get_book["year"] = book["year"];
    this.get_book["username"] = book["username"];
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

  listAllBooks() {
    this.bookService.listAllBooks().subscribe(result => {
      this.books = result;
      (["/index"])
    });
  }

  /* removeTask(book) {
     book.remove(book);
   }*/



}

