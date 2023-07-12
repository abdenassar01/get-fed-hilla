package com.lpw.getfed.repositories;

import com.lpw.getfed.models.Ingredient;
import com.lpw.getfed.models.Meal;
import com.lpw.getfed.models.SubCategory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IngrediantRepository extends JpaRepository<Ingredient, Long> {

    Page<Ingredient> findAllBySubCategory(SubCategory subCategory, Pageable pageable);

}
