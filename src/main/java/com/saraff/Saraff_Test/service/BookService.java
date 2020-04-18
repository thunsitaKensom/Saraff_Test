package com.saraff.Saraff_Test.service;

import com.saraff.Saraff_Test.Entity.Book;

public interface BookService {

    Book getBookById(Integer id);

    Iterable<Book> listAllBooks(String username);

    Book addBook(Book book);

    Book update(Book book);

}