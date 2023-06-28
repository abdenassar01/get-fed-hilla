package com.lpw.getfed.endpoints;

import com.lpw.getfed.models.Employee;
import com.lpw.getfed.services.EmployeeService;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

import java.util.logging.Logger;

@Endpoint
@AnonymousAllowed
public class EmployeeEndpoint {

    Logger logger = (Logger) LoggerFactory.getLogger(EmployeeEndpoint.class);

    private final EmployeeService service;

    @Autowired
    public EmployeeEndpoint(EmployeeService service) {
        this.service = service;
    }

    public ResponseEntity<Employee> addEmployee(Employee employee){
        logger.info("adding new employee: " + employee.getUsername());
        return service.addEmployee(employee);
    }

    public ResponseEntity<String> removeEmployee(Employee employee){
        logger.warning("deleting employee " + employee.getUsername());
        return service.removeEmployee(employee);
    }

    public ResponseEntity<Employee> removeEmployeeById(Long id){
        logger.warning("deleting employee: " + id);
        return service.removeEmployeeById(id);
    }

    public ResponseEntity<Employee> updateEmployee(Employee employee, Long id){
        logger.info("updating employee " + id + " details");
        return service.updateEmployee(employee, id);
    }

    public ResponseEntity<Page<Employee>> getPageEmployees(int page){
        logger.info("getting page " + page + " of employees");
        return service.getPageEmployees(PageRequest.of(page, 10));
    }

    public ResponseEntity<Page<Employee>> getPageEmployees(){
        logger.info("getting the first page of employees");
        return service.getPageEmployees(PageRequest.of(1, 10));
    }

}
