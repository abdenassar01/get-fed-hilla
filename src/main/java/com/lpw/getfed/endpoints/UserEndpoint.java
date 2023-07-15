package com.lpw.getfed.endpoints;

import com.lpw.getfed.models.User;
import com.lpw.getfed.services.UserService;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

@Endpoint
@AnonymousAllowed
public class UserEndpoint {

    Logger logger = LogManager.getLogger(CategoryEndpoint.class);

    private final UserService service;

    @Autowired
    public UserEndpoint(UserService service) {
        this.service = service;
    }

    public User addEmployee(User employee){
        logger.info("adding new employee: " + employee.getUsername());
        return service.addEmployee(employee);
    }

    public String removeEmployee(User employee){
        logger.warn("deleting employee " + employee.getUsername());
        return service.removeEmployee(employee);
    }

    public User removeEmployeeById(Long id){
        logger.warn("deleting employee: " + id);
        return service.removeEmployeeById(id);
    }

    public User updateEmployee(User employee, Long id){
        logger.info("updating employee " + id + " details");
        return service.updateEmployee(employee, id);
    }

    public Page<User> getPageUsers(int page){
        logger.info("getting page " + page + " of employees");
        return service.getPageEmployees(PageRequest.of(page, 10));
    }

    public User getUserByUsername(String username){
        logger.info("getting user: " + username);
        return service.getUserByUsername(username);
    }

}
