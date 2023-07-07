package com.lpw.getfed.services.implementations;

import com.lpw.getfed.models.Ingredient;
import com.lpw.getfed.models.Meal;
import com.lpw.getfed.models.SubCategory;
import com.lpw.getfed.repositories.IngrediantRepository;
import com.lpw.getfed.repositories.MealRepository;
import com.lpw.getfed.repositories.SubCategoryRepository;
import com.lpw.getfed.services.IngrediantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("ingrediant_service")
public class IngrediantServiceImplementation implements IngrediantService {

    private final IngrediantRepository repository;
    private final MealRepository mealRepository;
    private final SubCategoryRepository subCategoryRepository;

    @Autowired
    public IngrediantServiceImplementation(IngrediantRepository repository, MealRepository mealRepository, SubCategoryRepository subCategoryRepository) {
        this.repository = repository;
        this.mealRepository = mealRepository;
        this.subCategoryRepository = subCategoryRepository;
    }

    @Override
    public ResponseEntity<Page<Ingredient>> getAll(Pageable pageable) {
        return ResponseEntity.ok(repository.findAll(pageable));
    }

    @Override
    public ResponseEntity<Ingredient> addIngrediant(Ingredient ingredient) {
        return ResponseEntity.ok(repository.save(ingredient));
    }

    @Override
    public ResponseEntity<String> removeIngrediant(Ingredient ingredient) {
        repository.delete(ingredient);
        return ResponseEntity.ok("ingredient " + ingredient.getLabel() + " deleted successfully");
    }

    @Override
    public ResponseEntity<Ingredient> removeIngrediantById(Long id) {
        Ingredient ingredient =
                repository.findById(id).orElseThrow(
                        () -> new IllegalStateException("can't find ingredient with id: " + id));
        repository.deleteById(id);
        return ResponseEntity.ok(ingredient);
    }

    @Override
    public ResponseEntity<List<Ingredient>> getIngrediantsByMeal(Meal meal) {
        mealRepository.findById(meal.getId()).orElseThrow(() -> new IllegalStateException("can't find meal with id:" + meal.getId()));
        return ResponseEntity.ok(repository.findAllByMeal(meal));
    }

    @Override
    public ResponseEntity<Page<Ingredient>> getIngredientBySubCategory(Long subCategoryId, Pageable pageable) {
        SubCategory subCategory = subCategoryRepository.findById(subCategoryId).orElseThrow(() -> new IllegalStateException("can't find sub category with id: " + subCategoryId));
        return ResponseEntity.ok(repository.findAllBySubCategory(subCategory, pageable));
    }

    @Override
    public ResponseEntity<List<Ingredient>> getIngrediantsByMealId(Long id) {
        Meal meal = mealRepository.findById(id).orElseThrow(() -> new IllegalStateException("can't find meal with id:" + id));
        return ResponseEntity.ok(repository.findAllByMeal(meal));
    }
}
