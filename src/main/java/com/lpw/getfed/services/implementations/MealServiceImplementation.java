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

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
    public Meal addMeal(Meal meal) {
        return repository.save(meal);
    }

    @Override
    public Meal getMealById(Long id) {
        return
                repository.findById(id).orElseThrow(
                        () -> new IllegalStateException("can't find meal with id:" + id)
                );
    }

    @Override
    public Page<Meal> getMeals(Pageable pageable) {
        return repository.findAllByCustom (false ,pageable);
    }

    @Override
    public Meal removeMealById(Long id) {

        Meal meal = repository.findById(id).orElseThrow(
                () -> new IllegalStateException("can't find meal with id:" + id)
        );

        repository.deleteById(id);

        return meal;
    }

    @Override
    public String removeMeal(Meal meal) {
        return "can't find meal with id: " + meal.getId();
    }

    @Override
    public Meal updateMeal(Long id, Meal meal) {
        Meal oldMeal = repository.findById(id).orElseThrow(
                () -> new IllegalStateException("can't find meal with id:" + id)
        );

        meal.setId(id);
        repository.delete(oldMeal);
        return repository.save(meal);
    }

    @Override
    public Page<Meal> getMealByCategory(Long categoryId, Pageable pageable) {
        Category category = categoryRepository.findById(categoryId).orElseThrow(() -> new IllegalStateException("can't find category with id: " + categoryId));
        return repository.findAllByCategoryAndCustom(category, false, pageable);
    }

    @Override
    public List<Meal> searchMeal(String query) {
        return repository.findAllByTitleContaining(query);
    }

    @Override
    public Map<String, Object> countAll() {
        Map<String, Object> count = new HashMap<>();
        count.put("meals", repository.count());
        return count;
    }

    @Override
    public Map<String, Object> countAllByCustom() {
        Map<String, Object> count = new HashMap<>();
        count.put("meals", repository.countAllByCustomFalse());
        return count;
    }

    @Override
    public Map<String, Object> countAllByCategory(Long categoryId) {
        Category category = categoryRepository.findById(categoryId).orElseThrow(() -> new IllegalStateException("can't find category with id: " + categoryId));

        Map<String, Object> count = new HashMap<>();
        count.put("meals", repository.countAllByCategory(category));
        return count;
    }
}
