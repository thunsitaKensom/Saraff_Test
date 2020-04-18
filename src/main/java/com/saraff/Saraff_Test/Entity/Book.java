package com.saraff.Saraff_Test.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class Book {

    @Id
    private Integer Id;

    @NotNull
    private String BookName;

    @NotNull
    private String Author;

    @NotNull
    private String Year;

    @NotNull
    private String BookDetail;

    @NotNull
    private String Username;

    public Book() {

    }

    public Book(Integer Id, String BookName, String Author, String Year, String BookDetail, String Username) {

        this.Id = Id;
        this.BookName = BookName;
        this.Author = Author;
        this.Year = Year;
        this.BookDetail = BookDetail;
        this.Username = Username;
    }

    public void setId(Integer Id) {
        this.Id = Id;
    }

    public Integer getId() {
        return this.Id;
    }

    public void setBookName(String BookName) {
        this.BookName = BookName;
    }

    public String getBookName() {
        return this.BookName;
    }

    public void setAuthor(String Author) {
        this.Author = Author;
    }

    public String getAuthor() {
        return this.Author;
    }

    public void setYear(String Year) {
        this.Year = Year;
    }

    public String getYear() {
        return this.Year;
    }

    public void setBookDetail(String BookDetail) {
        this.BookDetail = BookDetail;
    }

    public String getBookDetail() {
        return this.BookDetail;
    }

    public void setUsername(String Username) {
        this.Username = Username;
    }

    public String getUsername() {
        return this.Username;
    }

}