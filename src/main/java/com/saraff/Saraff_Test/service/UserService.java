package com.saraff.Saraff_Test.service;

import com.saraff.Saraff_Test.Entity.User;

public interface UserService {

    User checkLogin(String username, String password);

    User save(User user);

    User getUserByUsername(String username);

    int update(User user, String username);
}