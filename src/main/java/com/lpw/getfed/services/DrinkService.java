package com.lpw.getfed.services;

import com.lpw.getfed.models.Drink;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

@Qualifier("drink_service")
public interface DrinkService {

    Drink getDrinkById(Long id);
    Page<Drink> getDrinks(Pageable pageable);
    Drink addDrink(Drink drink);
    Drink removeDrinkById(Long id);
    String removeDrink(Drink drink);
    Drink updateDrink(Long id, Drink drink);
    Page<Drink> searchDrink(String query, Pageable pageable);
}
