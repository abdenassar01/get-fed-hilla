package com.lpw.getfed.repositories;

import com.lpw.getfed.models.Drink;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DrinkRepository extends JpaRepository<Drink, Long> {

    Page<Drink> findByLabelContaining(String label, Pageable pageable);
}
