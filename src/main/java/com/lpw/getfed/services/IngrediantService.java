package com.lpw.getfed.services;

import com.lpw.getfed.models.Ingredient;
import com.lpw.getfed.models.Meal;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IngrediantService {

    ResponseEntity<Page<Ingredient>> getAll(Pageable pageable);
    ResponseEntity<Ingredient> addIngrediant(Ingredient ingredient);
    ResponseEntity<Ingredient> removeIngrediant(Ingredient ingredient);
    ResponseEntity<Ingredient> removeIngrediantById(Long id);
    ResponseEntity<List<Ingredient>> getIngrediantsByMeal(Meal meal);
}
