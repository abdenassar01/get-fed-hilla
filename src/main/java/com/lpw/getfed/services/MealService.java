package com.lpw.getfed.services;

import com.lpw.getfed.models.Category;
import com.lpw.getfed.models.Meal;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public interface MealService {

    ResponseEntity<Meal> getMealById(Long id);
    ResponseEntity<Meal> removeMealById(Long id);
    ResponseEntity<Meal> removeMeal(MealService meal);
    ResponseEntity<Meal> updateMeal(Long id, MealService meal);
    ResponseEntity<Page<Meal>> getMealByCategory(Category category, Pageable pageable);
    ResponseEntity<Page<Meal>> searchMeal(String query, Pageable pageable);
}
