package com.lpw.getfed.repositories;

import com.lpw.getfed.models.Ingredient;
import com.lpw.getfed.models.Meal;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IngrediantRepository extends JpaRepository<Ingredient, Long> {

    List<Ingredient> findAllByMeal(Meal meal);
}
