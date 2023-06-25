package com.lpw.getfed.repositories;

import com.lpw.getfed.models.Meal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MealRepository extends JpaRepository<Meal, Long> {
}
