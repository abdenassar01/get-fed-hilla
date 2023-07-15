package com.lpw.getfed.services.implementations;

import com.lpw.getfed.models.User;
import com.lpw.getfed.repositories.UserRepository;
import com.lpw.getfed.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service("user_service")
public class UserServiceImplementation implements UserService {

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserServiceImplementation(UserRepository repository, PasswordEncoder passwordEncoder) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public User addEmployee(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return repository.save(user);
    }

    @Override
    public String removeEmployee(User employee) {
        repository.delete(employee);
        return "Employee " + employee.getUsername() + " removed successfully";
    }

    @Override
    public User removeEmployeeById(Long id) {
        User employee =
                repository.findById(id).orElseThrow(
                        () -> new IllegalStateException("can't find employee with id: " + id)
                );
        repository.deleteById(id);
        return employee;
    }

    @Override
    public User updateEmployee(User employee, Long id) {
        User oldEmployee =
                repository.findById(id).orElseThrow(
                        () -> new IllegalStateException("can't find employee with id: " + id)
                );

        employee.setId(id);
        repository.delete(oldEmployee);
        return repository.save(employee);
    }

    @Override
    public Page<User> getPageEmployees(Pageable pageable) {
        return repository.findAll(pageable);
    }

    @Override
    public User getUserByUsername(String username) {
        return repository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("No user present with username: " + username));
    }

    @Override
    public Map<String, Object> countAll() {
        Map<String, Object> count = new HashMap<>();
        count.put("users", repository.count());
        return count;
    }

    @Override
    public UserDetails loadUserByUsername(String username) {
        try {
            User user = repository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("No user present with username: " + username));

            return new org.springframework.security.core.userdetails.User(
                    user.getUsername(),
                    user.getPassword(),
                    user.getAuthorities()
            );
        }catch (IndexOutOfBoundsException e){
            throw new UsernameNotFoundException("Wrong username");
        }catch(DataAccessException e){
            e.printStackTrace();
            throw new UsernameNotFoundException("Database Error");
        }catch(Exception e){
            e.printStackTrace();
            throw new UsernameNotFoundException("Unknown Error");
        }
    }
}
