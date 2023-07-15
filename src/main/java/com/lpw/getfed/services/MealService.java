package com.lpw.getfed.services;

import com.lpw.getfed.models.Category;
import com.lpw.getfed.models.Meal;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Qualifier("meal_service")
public interface MealService {

    Meal addMeal(Meal meal);
    Meal getMealById(Long id);
    Page<Meal> getMeals(Pageable pageable);
    Meal removeMealById(Long id);
    String removeMeal(Meal meal);
    Meal updateMeal(Long id, Meal meal);
    Page<Meal> getMealByCategory(Long categoryId, Pageable pageable);
    List<Meal> searchMeal(String query);
    Map<String, Object> countAll();
    Map<String, Object> countAllByCustom();
    Map<String, Object> countAllByCategory(Long categoryId);
}
