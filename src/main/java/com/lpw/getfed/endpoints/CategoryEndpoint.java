package com.lpw.getfed.endpoints;

import com.lpw.getfed.models.Category;
import com.lpw.getfed.services.CategoryService;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.List;

@Endpoint
@AnonymousAllowed
public class CategoryEndpoint {
    Logger logger = LogManager.getLogger(CategoryEndpoint.class);

    private final CategoryService service;

    @Autowired
    public CategoryEndpoint(CategoryService service) {
        this.service = service;
    }

    public ResponseEntity<Category> addCategory(Category category){
        logger.info("Added a new category named: " + category.getLabel());
        return service.addCategory(category);
    }

    public ResponseEntity<String> removeCategory(Category category){
        logger.warn("removed category named: " + category.getLabel());
        return service.removeCategory(category);
    }

    public ResponseEntity<Category> removeCategoryById(Long id){
        logger.warn("removed category by id: " + id);
        return service.removeCategoryById(id);
    }

    public ResponseEntity<Category> updateCategory(Long id, Category category){
        logger.info("updating the category " + id + " infos");
        return service.updateCategory(id, category);
    }

    public ResponseEntity<List<Category>> getCategories(){
        logger.info("getting all categories");
        return service.getCategories();
    }
}
