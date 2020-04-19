package com.saraff.Saraff_Test.Repository;

import org.springframework.transaction.annotation.Transactional;

import com.saraff.Saraff_Test.Entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface BookRepository extends JpaRepository<Book, Integer> {

    @Query(value = "SELECT * FROM `book` where username=?", nativeQuery = true)
    Iterable<Book> listOwnerBooks(String username);

    @Transactional
    @Modifying
    @Query(value = "DELETE from `book` where book.id=?", nativeQuery = true)
    void deleteBook(Book book);

}