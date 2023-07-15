package com.lpw.getfed.endpoints;

import com.lpw.getfed.models.Drink;
import com.lpw.getfed.services.DrinkService;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;

import java.util.Objects;

@Endpoint
@AnonymousAllowed
public class DrinkEndpoint {

    Logger logger = LogManager.getLogger(CategoryEndpoint.class);

    private final DrinkService service;

    @Autowired
    public DrinkEndpoint(DrinkService service) {
        this.service = service;
    }

    public Drink getDrinkById(Long id){
        logger.info("getting drink " + id + " details");
        return service.getDrinkById(id);
    }

    public Page<Drink> getDrinks(int page, int size){
        logger.info("getting page " + page + " of drinks  details");
        return service.getDrinks(PageRequest.of(page, size));
    }

    public Drink addDrink(Drink drink){
        logger.info("adding new drink item");
        return service.addDrink(drink);
    }

    public Drink removeDrinkById(Long id){
        logger.warn("deleting a drink item with id: " + id);
        return service.removeDrinkById(id);
    }

    public String removeDrink(Drink drink){
        logger.warn("removing drink item with object " + drink.getLabel());
        return service.removeDrink(drink);
    }

    public Drink updateDrink(Long id, Drink drink){
        logger.info("updating drink " + id + " details");
        return service.updateDrink(id, drink);
    }

    public Page<Drink> searchDrinkPaging(String query, int page, int size){
        logger.info("searching with value: " + query);
        return service.searchDrink(query, PageRequest.of(page, size));
    }

//    public ResponseEntity<Page<Drink>> searchDrink(String query){
//        logger.info("searching with value: " + query);
//        return service.searchDrink(query, PageRequest.of(1, 10));
//    }
}
