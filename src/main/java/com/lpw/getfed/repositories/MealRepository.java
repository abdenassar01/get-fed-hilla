package com.lpw.getfed.repositories;

import com.lpw.getfed.models.Category;
import com.lpw.getfed.models.Meal;
import com.lpw.getfed.models.SubCategory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MealRepository extends JpaRepository<Meal, Long> {

    Page<Meal> findAllByCategory(Category category, Pageable pageable);
    Page<Meal> findAllByCategoryAndCustom(Category category, boolean custom, Pageable pageable);
    Page<Meal> findAllByCustom(boolean custom, Pageable pageable);
    List<Meal> findAllByTitleContaining(String title);
    int countAllByCustomFalse();
    int countAllByCategory(Category category);
}
