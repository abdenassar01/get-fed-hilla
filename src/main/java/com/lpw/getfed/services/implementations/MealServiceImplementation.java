package com.lpw.getfed.services.implementations;

import com.lpw.getfed.models.Category;
import com.lpw.getfed.models.Meal;
import com.lpw.getfed.repositories.CategoryRepository;
import com.lpw.getfed.repositories.MealRepository;
import com.lpw.getfed.services.MealService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("meal_service")
public class MealServiceImplementation implements MealService {

    private final MealRepository repository;
    private final CategoryRepository categoryRepository;

    @Autowired
    public MealServiceImplementation(MealRepository repository, CategoryRepository categoryRepository) {
        this.repository = repository;
        this.categoryRepository = categoryRepository;
    }

    @Override
    public ResponseEntity<Meal> addMeal(Meal meal) {
        return ResponseEntity.ok(repository.save(meal));
    }

    @Override
    public ResponseEntity<Meal> getMealById(Long id) {
        return ResponseEntity.ok(
                repository.findById(id).orElseThrow(
                        () -> new IllegalStateException("can't find meal with id:" + id)
                )
        );
    }

    @Override
    public ResponseEntity<Meal> removeMealById(Long id) {

        Meal meal = repository.findById(id).orElseThrow(
                () -> new IllegalStateException("can't find meal with id:" + id)
        );

        repository.deleteById(id);

        return ResponseEntity.ok(meal);
    }

    @Override
    public ResponseEntity<String> removeMeal(Meal meal) {
        return ResponseEntity.ok("can't find meal with id: " + meal.getId() );
    }

    @Override
    public ResponseEntity<Meal> updateMeal(Long id, Meal meal) {
        Meal oldMeal = repository.findById(id).orElseThrow(
                () -> new IllegalStateException("can't find meal with id:" + id)
        );

        meal.setId(id);
        repository.delete(oldMeal);
        return ResponseEntity.ok(repository.save(meal));
    }

    @Override
    public ResponseEntity<Page<Meal>> getMealByCategory(Long categoryId, Pageable pageable) {
        Category category = categoryRepository.getReferenceById(categoryId);
        return ResponseEntity.ok(repository.findAllByCategory(category, pageable));
    }

    @Override
    public ResponseEntity<List<Meal>> searchMeal(String query) {
        return ResponseEntity.ok(repository.findAllByTitleContaining(query));
    }
}
