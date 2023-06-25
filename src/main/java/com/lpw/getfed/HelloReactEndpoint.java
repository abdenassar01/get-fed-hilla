package com.lpw.getfed;

import com.lpw.getfed.models.Employee;
import com.lpw.getfed.repositories.EmployeeRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;
import dev.hilla.Nonnull;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Endpoint
@AnonymousAllowed
public class HelloReactEndpoint {

    private final EmployeeRepository repo;

    @Autowired
    public HelloReactEndpoint(EmployeeRepository repo) {
        this.repo = repo;
    }


    @Nonnull
    public List<Employee> sayHello() {
        return repo.findAll();
    }
}