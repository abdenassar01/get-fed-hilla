package com.lpw.getfed.services;

import com.lpw.getfed.models.Employee;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Qualifier("employee_service")
public interface EmployeeService{
    ResponseEntity<Employee> addEmployee(Employee employee);
    ResponseEntity<String> removeEmployee(Employee employee);
    ResponseEntity<Employee> removeEmployeeById(Long id);
    ResponseEntity<Employee> updateEmployee(Employee employee, Long id);
    ResponseEntity<Page<Employee>> getPageEmployees(Pageable pageable);

}
