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
    public Page<Ingredient> getAll(Pageable pageable) {
        return repository.findAll(pageable);
    }

    @Override
    public Ingredient addIngrediant(Ingredient ingredient) {
        return repository.save(ingredient);
    }

    @Override
    public Ingredient getIngredientById(Long id) {
        return repository.findById(id).orElseThrow(() -> new IllegalStateException("can't find ingredient with id: " + id));
    }

    @Override
    public String removeIngrediant(Ingredient ingredient) {
        repository.delete(ingredient);
        return "ingredient " + ingredient.getLabel() + " deleted successfully";
    }

    @Override
    public Ingredient removeIngrediantById(Long id) {
        Ingredient ingredient =
                repository.findById(id).orElseThrow(
                        () -> new IllegalStateException("can't find ingredient with id: " + id));
        repository.deleteById(id);
        return ingredient;
    }

    @Override
    public Page<Ingredient> getIngredientBySubCategory(Long subCategoryId, Pageable pageable) {
        SubCategory subCategory = subCategoryRepository.findById(subCategoryId).orElseThrow(() -> new IllegalStateException("can't find sub category with id: " + subCategoryId));
        return repository.findAllBySubCategory(subCategory, pageable);
    }
}
