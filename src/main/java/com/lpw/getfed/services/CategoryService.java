package com.lpw.getfed.services;

import com.lpw.getfed.models.Category;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CategoryService{

    ResponseEntity<Category> addCategory(Category category);
    ResponseEntity<Category> removeCategory(Category category);
    ResponseEntity<Category> removeCategoryById(Long id);
    ResponseEntity<Category> updateCategory(Long id, Category category);
    ResponseEntity<List<Category>> getCategories();
}
