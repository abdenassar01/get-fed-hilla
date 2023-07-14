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

    Page<Ingredient> getAll(Pageable pageable);
    Ingredient addIngrediant(Ingredient ingredient);
    Ingredient getIngredientById(Long id);
    String removeIngrediant(Ingredient ingredient);
    Ingredient removeIngrediantById(Long id);
    Page<Ingredient> getIngredientBySubCategory(Long subCategoryId, Pageable pageable);

}
