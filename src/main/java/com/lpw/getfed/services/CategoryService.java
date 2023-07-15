package com.lpw.getfed.services;

import com.lpw.getfed.models.Category;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Qualifier("category_service")
public interface CategoryService{

    Category addCategory(Category category);
    String removeCategory(Category category);
    Category removeCategoryById(Long id);
    Category updateCategory(Long id, Category category);
    List<Category> getCategories();
}
