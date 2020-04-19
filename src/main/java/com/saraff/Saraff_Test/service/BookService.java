package com.saraff.Saraff_Test.service;

import com.saraff.Saraff_Test.Entity.Book;

public interface BookService {

    // Book getBookById(Integer id);

    Iterable<Book> listOwnerBooks(String username);

    Book save(Book book);

    Book update(Book book);

    void deleteBook(Book book);

}