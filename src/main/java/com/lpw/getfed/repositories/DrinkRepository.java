package com.lpw.getfed.repositories;

import com.lpw.getfed.models.Drink;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DrinkRepository extends JpaRepository<Drink, Long> {
}
