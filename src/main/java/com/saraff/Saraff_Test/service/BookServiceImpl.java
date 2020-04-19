package com.saraff.Saraff_Test.service;

import com.saraff.Saraff_Test.Entity.Book;
import com.saraff.Saraff_Test.Repository.BookRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private BookRepository bookRepository;

    /*
     * @Override public Book getBookById(Integer id) { return
     * bookRepository.findById(id).get(); }
     */

    @Override
    public Iterable<Book> listOwnerBooks(String username) {
        return bookRepository.listOwnerBooks(username);
    }

    @Override
    public Book save(Book book) {
        return bookRepository.save(book);
    }

    @Override
    public Book update(Book book) {
        return bookRepository.save(book);
    }

    @Override
    public void deleteBook(Book book) {
        bookRepository.deleteBook(book);
    }

    /*
     * @Override public int update(Integer id) { }
     */

}