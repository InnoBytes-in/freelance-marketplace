package com.springboot.freelance.entity.Validator;

import com.springboot.freelance.entity.Annotaions.UniqueUsernameOrEmail;
import com.springboot.freelance.entity.User;
import com.springboot.freelance.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.Optional;

public class UniqueUsernameOrEmailValidator implements ConstraintValidator<UniqueUsernameOrEmail, String> {

    @Autowired
    UserRepository userRepository;

    @Override
    public boolean isValid(String s, ConstraintValidatorContext constraintValidatorContext) {
        Optional<User> userdata = userRepository.findByUserName(s);
        Optional<User> userdata1 = userRepository.findByEmail(s);
        return userdata.isEmpty() && userdata1.isEmpty();
    }
}
