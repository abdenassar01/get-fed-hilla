package com.lpw.getfed.repositories;

import com.lpw.getfed.models.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IngrediantRepository extends JpaRepository<Ingredient, Long> {
}
