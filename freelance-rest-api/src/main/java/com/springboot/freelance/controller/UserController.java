package com.springboot.freelance.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/1.0")
public class UserController {

//    UserService userService;
//
//    public UserController(UserService userService) {
//        this.userService = userService;
//    }
//
//    @PostMapping("/register")
//    public GenericResponse crateUser(@Valid @RequestBody User user) {
//        userService.saveUser(user);
//        return new GenericResponse("User Saved");
//    }
}
