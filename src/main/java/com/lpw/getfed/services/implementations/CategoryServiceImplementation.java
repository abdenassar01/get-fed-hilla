package com.lpw.getfed.services.implementations;

import com.lpw.getfed.models.Category;
import com.lpw.getfed.repositories.CategoryRepository;
import com.lpw.getfed.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("category_service")
public class CategoryServiceImplementation implements CategoryService {

    private final CategoryRepository repository;

    @Autowired
    public CategoryServiceImplementation(CategoryRepository repository) {
        this.repository = repository;
    }

    @Override
    public ResponseEntity<Category> addCategory(Category category) {
        return ResponseEntity.ok(repository.save(category));
    }

    @Override
    public ResponseEntity<String> removeCategory(Category category) {
        repository.delete(category);

        return ResponseEntity.ok("category deleted successfully");
    }

    @Override
    public ResponseEntity<Category> removeCategoryById(Long id) {
        Category category = repository.findById(id).orElseThrow(() -> new IllegalStateException("can't find Category with id: " + id));
        repository.delete(category);
        return ResponseEntity.ok(category);
    }

    @Override
    public ResponseEntity<Category> updateCategory(Long id, Category category) {

        Category oldCategory = repository.findById(id).orElseThrow(() -> new IllegalStateException("can't find Category with id: " + id));
        category.setId(oldCategory.getId());

        repository.delete(oldCategory);
        return ResponseEntity.ok(repository.save(category));
    }

    @Override
    public ResponseEntity<List<Category>> getCategories() {
        return ResponseEntity.ok(repository.findAll());
    }
}

