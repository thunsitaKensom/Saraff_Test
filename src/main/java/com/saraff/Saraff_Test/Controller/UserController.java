package com.saraff.Saraff_Test.Controller;

import com.saraff.Saraff_Test.service.BookService;
import com.saraff.Saraff_Test.service.UserService;
import com.saraff.Saraff_Test.Entity.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    // standard constructors
    @Autowired
    private UserService userService;

    @Autowired
    private BookService bookService;

    @PostMapping("/user/create")
    void addUser(@RequestBody User user) {
        userService.save(user);
    }

    @PostMapping("/user/update/{oldusername}")
    void update(@PathVariable String oldusername, @RequestBody User user) {
        userService.update(user, oldusername);
        bookService.updateUsername(user.getUsername(), oldusername);
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        if (userService.checkLogin(user.getUsername(), user.getPassword()) != null) {
            return "true";
        }

        return "false";
    }

    @PostMapping("/profile/{username}")
    public User profile(@PathVariable String username) {
        return userService.getUserByUsername(username);
    }

    @GetMapping("/user/duplicate/{username}")
    public User checkDuplicate(@PathVariable String username, @RequestParam String input) {
        return userService.checkDuplicate(username, input);
    }

}