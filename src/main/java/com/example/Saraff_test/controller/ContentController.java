package com.example.Saraff_test.controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

public class ContentController {

    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public String list(Model model) {
        // model.addAttribute("users", userRepository.listAllUsers());
        return "user/users";
    }

}