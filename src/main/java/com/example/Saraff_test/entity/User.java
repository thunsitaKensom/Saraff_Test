package com.example.Saraff_test.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.validation.constraints.NotNull;
import javax.persistence.Id;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer uid;

    @NotNull
    private String Username;

    @NotNull
    private String Password;

    @NotNull
    private String Nickname;

    @NotNull
    private String Email;

    public User() {

    }

    public User(String Username, String Password, String Nickname, String Email) {
        this.Username = Username;
        this.Password = Password;
        this.Nickname = Nickname;
        this.Email = Email;
    }

    public void setId(Integer uid) {
        this.uid = uid;
    }

    public Integer getId() {
        return this.uid;
    }

    public void setUsername(String Username) {
        this.Username = Username;
    }

    public String getUsername() {
        return this.Username;
    }

    public void setPassword(String Password) {
        this.Password = Password;
    }

    public String getPassword() {
        return this.Password;
    }

    public void setNickname(String Nickname) {
        this.Nickname = Nickname;
    }

    public String getNickname() {
        return this.Nickname;
    }

    public void setEmail(String Email) {
        this.Email = Email;
    }

    public String getEmail() {
        return this.Email;
    }

}