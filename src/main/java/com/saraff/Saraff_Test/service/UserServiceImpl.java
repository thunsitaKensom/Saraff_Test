package com.saraff.Saraff_Test.service;

import com.saraff.Saraff_Test.Entity.User;
import com.saraff.Saraff_Test.Repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User checkLogin(String username, String password) {
        return userRepository.checkLogin(username, password);
    }

    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public int update(User user, String username) {
        return userRepository.update(user.getUsername(), user.getPassword(), user.getNickname(), user.getEmail(),
                username);
    }

    @Override
    public User getUserByUsername(String username) {
        return userRepository.findById(username).get();
    }

}