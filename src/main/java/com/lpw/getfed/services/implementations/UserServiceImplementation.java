package com.lpw.getfed.services.implementations;

import com.lpw.getfed.models.User;
import com.lpw.getfed.repositories.UserRepository;
import com.lpw.getfed.services.UserService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service("user_service")
public class UserServiceImplementation implements UserService {

    private final UserRepository repository;

    public UserServiceImplementation(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public ResponseEntity<User> addEmployee(User employee) {
        return ResponseEntity.ok(repository.save(employee));
    }

    @Override
    public ResponseEntity<String> removeEmployee(User employee) {
        repository.delete(employee);
        return ResponseEntity.ok("Employee " + employee.getUsername() + " removed successfully");
    }

    @Override
    public ResponseEntity<User> removeEmployeeById(Long id) {
        User employee =
                repository.findById(id).orElseThrow(
                        () -> new IllegalStateException("can't find employee with id: " + id)
                );
        repository.deleteById(id);
        return ResponseEntity.ok(employee);
    }

    @Override
    public ResponseEntity<User> updateEmployee(User employee, Long id) {
        User oldEmployee =
                repository.findById(id).orElseThrow(
                        () -> new IllegalStateException("can't find employee with id: " + id)
                );

        employee.setId(id);
        repository.delete(oldEmployee);
        return ResponseEntity.ok(repository.save(employee));
    }

    @Override
    public ResponseEntity<Page<User>> getPageEmployees(Pageable pageable) {
        return ResponseEntity.ok(repository.findAll(pageable));
    }
}
