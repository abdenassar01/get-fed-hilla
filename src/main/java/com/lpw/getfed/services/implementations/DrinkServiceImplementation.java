package com.lpw.getfed.services.implementations;

import com.lpw.getfed.models.Drink;
import com.lpw.getfed.repositories.DrinkRepository;
import com.lpw.getfed.services.DrinkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service("drink_service")
public class DrinkServiceImplementation implements DrinkService {

    private final DrinkRepository repository;

    @Autowired
    public DrinkServiceImplementation(DrinkRepository repository) {
        this.repository = repository;
    }

    @Override
    public ResponseEntity<Drink> getDrinkById(Long id) {
        return ResponseEntity.ok(
                repository.findById(id).orElseThrow(
                        () -> new IllegalStateException("can't find drink item with id: " + id)
                )
        );
    }

    @Override
    public ResponseEntity<Drink> addDrink(Drink drink) {
        return ResponseEntity.ok(repository.save(drink));
    }

    @Override
    public ResponseEntity<Drink> removeDrinkById(Long id) {
        Drink drink = repository.findById(id).orElseThrow(
                () -> new IllegalStateException("can't find drink item with id: " + id)
        );
        repository.deleteById(id);
        return ResponseEntity.ok(drink);
    }

    @Override
    public ResponseEntity<String> removeDrink(Drink drink) {
        repository.delete(drink);
        return ResponseEntity.ok("drink " +  drink.getId() + " deleted successfully");
    }

    @Override
    public ResponseEntity<Drink> updateDrink(Long id, Drink drink) {
        Drink oldDrink = repository.findById(id).orElseThrow(
                () -> new IllegalStateException("can't find drink item with id: " + id)
        );

        drink.setId(id);
        repository.delete(oldDrink);
        return ResponseEntity.ok(repository.save(oldDrink));
    }

    @Override
    public ResponseEntity<Page<Drink>> searchDrink(String query, Pageable pageable) {
        return ResponseEntity.ok(repository.findByLabelContaining(query, pageable));
    }
}
