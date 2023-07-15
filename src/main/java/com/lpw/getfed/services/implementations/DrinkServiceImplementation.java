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
    public Drink getDrinkById(Long id) {
        return repository.findById(id).orElseThrow(
                        () -> new IllegalStateException("can't find drink item with id: " + id)
                );
    }

    @Override
    public Page<Drink> getDrinks(Pageable pageable) {
        return repository.findAll(pageable);
    }

    @Override
    public Drink addDrink(Drink drink) {
        return repository.save(drink);
    }

    @Override
    public Drink removeDrinkById(Long id) {
        Drink drink = repository.findById(id).orElseThrow(
                () -> new IllegalStateException("can't find drink item with id: " + id)
        );
        repository.deleteById(id);
        return drink;
    }

    @Override
    public String removeDrink(Drink drink) {
        repository.delete(drink);
        return "drink " +  drink.getId() + " deleted successfully";
    }

    @Override
    public Drink updateDrink(Long id, Drink drink) {
        Drink oldDrink = repository.findById(id).orElseThrow(
                () -> new IllegalStateException("can't find drink item with id: " + id)
        );

        drink.setId(id);
        repository.delete(oldDrink);
        return repository.save(oldDrink);
    }

    @Override
    public Page<Drink> searchDrink(String query, Pageable pageable) {
        return repository.findByLabelContaining(query, pageable);
    }
}
