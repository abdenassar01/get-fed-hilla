package com.lpw.getfed;

import com.lpw.getfed.models.Category;
import com.lpw.getfed.services.CategoryService;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;
import dev.hilla.Nonnull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import java.util.List;

@Endpoint
@AnonymousAllowed
public class HelloReactEndpoint {

    private final CategoryService service;
    @Autowired
    public HelloReactEndpoint(CategoryService service) {
        this.service = service;
    }


    @Nonnull
    public ResponseEntity<List<Category>> sayHello() {
        return service.getCategories();
    }

    @Nonnull
    public ResponseEntity<Category> addCategory(Category category) {
        return service.addCategory(category);
    }
}