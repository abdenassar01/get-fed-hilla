package com.lpw.getfed.services.implementations;

import com.lpw.getfed.models.Employee;
import com.lpw.getfed.repositories.EmployeeRepository;
import com.lpw.getfed.services.EmployeeService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service("employee_service")
public class EmployeeServiceImplementation implements EmployeeService {

    private final EmployeeRepository repository;

    public EmployeeServiceImplementation(EmployeeRepository repository) {
        this.repository = repository;
    }

    @Override
    public ResponseEntity<Employee> addEmployee(Employee employee) {
        return ResponseEntity.ok(repository.save(employee));
    }

    @Override
    public ResponseEntity<String> removeEmployee(Employee employee) {
        repository.delete(employee);
        return ResponseEntity.ok("Employee " + employee.getUsername() + " removed successfully");
    }

    @Override
    public ResponseEntity<Employee> removeEmployeeById(Long id) {
        Employee employee =
                repository.findById(id).orElseThrow(
                        () -> new IllegalStateException("can't find employee with id: " + id)
                );
        repository.deleteById(id);
        return ResponseEntity.ok(employee);
    }

    @Override
    public ResponseEntity<Employee> updateEmployee(Employee employee, Long id) {
        Employee oldEmployee =
                repository.findById(id).orElseThrow(
                        () -> new IllegalStateException("can't find employee with id: " + id)
                );

        employee.setId(id);
        repository.delete(oldEmployee);
        return ResponseEntity.ok(repository.save(employee));
    }

    @Override
    public ResponseEntity<Page<Employee>> getPageEmployees(Pageable pageable) {
        return ResponseEntity.ok(repository.findAll(pageable));
    }
}
