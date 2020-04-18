package com.saraff.Saraff_Test.Repository;

import com.saraff.Saraff_Test.Entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface BookRepository extends JpaRepository<Book, Integer> {

    @Query(value = "SELECT * FROM `book` where username=?", nativeQuery = true)
    Iterable<Book> listAllBook(String username);

}