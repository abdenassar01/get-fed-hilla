package com.lpw.getfed.services;

import com.lpw.getfed.models.User;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.Map;

@Qualifier("user_service")
public interface UserService extends UserDetailsService {
    User addEmployee(User employee);
    String removeEmployee(User employee);
    User removeEmployeeById(Long id);
    User updateEmployee(User employee, Long id);
    Page<User> getPageEmployees(Pageable pageable);
    User getUserByUsername(String username);
    Map<String, Object> countAll();
}
