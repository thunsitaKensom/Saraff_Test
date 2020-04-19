package com.saraff.Saraff_Test.Controller;

import com.saraff.Saraff_Test.service.BookService;
import com.saraff.Saraff_Test.Entity.Book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BookController {

    @Autowired
    private BookService bookService;

    @RequestMapping("/books/{username}")
    public Iterable<Book> list(@PathVariable String username) {
        return bookService.listOwnerBooks(username);
    }

    /*
     * @RequestMapping("book/{id}") public Book viewBook(@PathVariable Integer id) {
     * return bookService.getBookById(id); }
     */

    /*
     * @PostMapping("/book/update/{id}") void update(@PathVariable Integer id) {
     * bookService.update(id); }
     */

    @PostMapping("/book/update")
    void update(@RequestBody Book book) {
        bookService.update(book);
    }

    @PostMapping("/book/save")
    void save(@RequestBody Book book) {
        bookService.save(book);
    }

    @RequestMapping("book/delete")
    void delete(@RequestBody Book book) {
        bookService.deleteBook(book);
    }

}