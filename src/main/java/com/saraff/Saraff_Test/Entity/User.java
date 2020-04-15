package com.saraff.Saraff_Test.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class User {

    @Id
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