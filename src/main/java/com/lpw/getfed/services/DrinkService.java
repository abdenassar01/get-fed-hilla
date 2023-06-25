package com.lpw.getfed.services;

import com.lpw.getfed.models.Drink;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public interface DrinkService {

    ResponseEntity<Drink> getDrinkById(Long id);
    ResponseEntity<Drink> addDrink(Drink drink);
    ResponseEntity<Drink> removeDrinkById(Long id);
    ResponseEntity<Drink> removeDrink(Drink drink);
    ResponseEntity<Drink> updateDrink(Long id, Drink drink);
    ResponseEntity<Page<Drink>> searchDrink(String query, Pageable pageable);
}
