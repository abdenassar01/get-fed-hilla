package com.lpw.getfed.endpoints;

import com.lpw.getfed.models.Ingredient;
import com.lpw.getfed.models.Meal;
import com.lpw.getfed.services.IngrediantService;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;

import java.util.List;

@Endpoint
@AnonymousAllowed
public class IngredientEndpoint {

    Logger logger = LogManager.getLogger(CategoryEndpoint.class);

    private final IngrediantService service;

    @Autowired
    public IngredientEndpoint(IngrediantService service) {
        this.service = service;
    }

    public ResponseEntity<Page<Ingredient>> getAll(int page, int size){
        logger.info("getting page " + page + " of ingredients");
        return service.getAll(PageRequest.of(page, size));
    }

    public ResponseEntity<Page<Ingredient>> getAll(){
        logger.info("getting page " + 1 + " of ingredients");
        return service.getAll(PageRequest.of(0, 20));
    }

    public ResponseEntity<Ingredient> addIngrediant(Ingredient ingredient){
        logger.info("adding new ingredient: " + ingredient.getLabel());
        return service.addIngrediant(ingredient);
    }

    public ResponseEntity<String> removeIngrediant(Ingredient ingredient){
        logger.warn("removing ingredient: " + ingredient.getId());
        return service.removeIngrediant(ingredient);
    }

    public ResponseEntity<Ingredient> removeIngrediantById(Long id){
        logger.warn("removing ingredient by id: " + id);
        return service.removeIngrediantById(id);
    }

    public ResponseEntity<List<Ingredient>> getIngrediantsByMeal(Meal meal){
        logger.info("getting the ingredients of meal: " + meal.getId());
        return service.getIngrediantsByMeal(meal);
    }

    public ResponseEntity<List<Ingredient>> getIngrediantsByMealId(Long id){
        logger.info("getting the ingredients of meal: " + id);
        return service.getIngrediantsByMealId(id);
    }
}
