package com.saraff.Saraff_Test.Controller;

import com.saraff.Saraff_Test.Repository.UserRepository;
import com.saraff.Saraff_Test.Entity.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    // standard constructors
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/users")
    void addUser(@RequestBody User user) {
        userRepository.save(user);
    }

    @RequestMapping("/home")
    public String hello() {
        return "Hello, world";
    }

    @RequestMapping("/check")
    public String user(String user) {
        return user;
    }

}