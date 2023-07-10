package com.lpw.getfed.services;

import com.lpw.getfed.models.User;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

@Qualifier("user_service")
public interface UserService {
    ResponseEntity<User> addEmployee(User employee);
    ResponseEntity<String> removeEmployee(User employee);
    ResponseEntity<User> removeEmployeeById(Long id);
    ResponseEntity<User> updateEmployee(User employee, Long id);
    ResponseEntity<Page<User>> getPageEmployees(Pageable pageable);

}
