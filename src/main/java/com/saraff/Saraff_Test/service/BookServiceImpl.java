package com.saraff.Saraff_Test.service;

import com.saraff.Saraff_Test.Entity.Book;
import com.saraff.Saraff_Test.Repository.BookRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private BookRepository bookRepository;

    @Override
    public Book getBookById(Integer id) {
        return bookRepository.findById(id).get();
    }

    @Override
    public Iterable<Book> listAllBooks(String username) {
        return bookRepository.listAllBook(username);
    }

    @Override
    public int update(Integer id) {
        // TODO Auto-generated method stub
        return 0;
    }

    /*
     * @Override public int update(Integer id) { }
     */

}