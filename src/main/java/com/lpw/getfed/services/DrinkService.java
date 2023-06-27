package com.lpw.getfed.services;

import com.lpw.getfed.models.Drink;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

@Qualifier("drink_service")
public interface DrinkService {

    ResponseEntity<Drink> getDrinkById(Long id);
    ResponseEntity<Drink> addDrink(Drink drink);
    ResponseEntity<Drink> removeDrinkById(Long id);
    ResponseEntity<String> removeDrink(Drink drink);
    ResponseEntity<Drink> updateDrink(Long id, Drink drink);
    ResponseEntity<Page<Drink>> searchDrink(String query, Pageable pageable);
}
