package com.lpw.getfed.repositories;

import com.lpw.getfed.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
