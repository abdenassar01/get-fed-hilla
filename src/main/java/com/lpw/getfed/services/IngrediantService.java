package com.lpw.getfed.services;

import com.lpw.getfed.models.Ingredient;
import com.lpw.getfed.models.Meal;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Qualifier("ingrediant_service")
public interface IngrediantService {

    ResponseEntity<Page<Ingredient>> getAll(Pageable pageable);
    ResponseEntity<Ingredient> addIngrediant(Ingredient ingredient);
    ResponseEntity<String> removeIngrediant(Ingredient ingredient);
    ResponseEntity<Ingredient> removeIngrediantById(Long id);
    ResponseEntity<Page<Ingredient>> getIngredientBySubCategory(Long subCategoryId, Pageable pageable);

}
