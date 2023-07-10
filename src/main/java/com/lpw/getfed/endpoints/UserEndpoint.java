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

@Endpoint
@AnonymousAllowed
public class UserEndpoint {

    Logger logger = LogManager.getLogger(CategoryEndpoint.class);

    private final UserService service;

    @Autowired
    public UserEndpoint(UserService service) {
        this.service = service;
    }

    public ResponseEntity<User> addEmployee(User employee){
        logger.info("adding new employee: " + employee.getUsername());
        return service.addEmployee(employee);
    }

    public ResponseEntity<String> removeEmployee(User employee){
        logger.warn("deleting employee " + employee.getUsername());
        return service.removeEmployee(employee);
    }

    public ResponseEntity<User> removeEmployeeById(Long id){
        logger.warn("deleting employee: " + id);
        return service.removeEmployeeById(id);
    }

    public ResponseEntity<User> updateEmployee(User employee, Long id){
        logger.info("updating employee " + id + " details");
        return service.updateEmployee(employee, id);
    }

    public ResponseEntity<Page<User>> getPageEmployees(int page){
        logger.info("getting page " + page + " of employees");
        return service.getPageEmployees(PageRequest.of(page, 10));
    }

    public ResponseEntity<Page<User>> getPageEmployees(){
        logger.info("getting the first page of employees");
        return service.getPageEmployees(PageRequest.of(0, 10));
    }

}