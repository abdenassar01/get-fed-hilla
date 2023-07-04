package com.lpw.getfed.services;

import com.lpw.getfed.models.Category;
import com.lpw.getfed.models.Meal;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Qualifier("meal_service")
public interface MealService {

    ResponseEntity<Meal> addMeal(Meal meal);
    ResponseEntity<Meal> getMealById(Long id);
    ResponseEntity<Page<Meal>> getMeals(Pageable pageable);
    ResponseEntity<Meal> removeMealById(Long id);
    ResponseEntity<String> removeMeal(Meal meal);
    ResponseEntity<Meal> updateMeal(Long id, Meal meal);
    ResponseEntity<Page<Meal>> getMealByCategory(Long categoryId, Pageable pageable);
    ResponseEntity<List<Meal>> searchMeal(String query);
}
