package com.lpw.getfed.services;

import com.lpw.getfed.models.Category;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Qualifier("category_service")
public interface CategoryService{

    ResponseEntity<Category> addCategory(Category category);
    ResponseEntity<String> removeCategory(Category category);
    ResponseEntity<Category> removeCategoryById(Long id);
    ResponseEntity<Category> updateCategory(Long id, Category category);
    ResponseEntity<List<Category>> getCategories();
}
