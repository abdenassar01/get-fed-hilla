package com.lpw.getfed.repositories;

import com.lpw.getfed.models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
