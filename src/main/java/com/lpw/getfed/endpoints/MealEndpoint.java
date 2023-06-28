package com.lpw.getfed.endpoints;

import com.lpw.getfed.models.Category;
import com.lpw.getfed.models.Meal;
import com.lpw.getfed.services.MealService;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.logging.Logger;

@Endpoint
@AnonymousAllowed
public class MealEndpoint {

    Logger logger = (Logger) LoggerFactory.getLogger(MealEndpoint.class);

    private final MealService service;

    @Autowired
    public MealEndpoint(MealService service) {
        this.service = service;
    }

    public ResponseEntity<Meal> getMealById(Long id){
        logger.info("getting meal " + id + " details");
        return service.getMealById(id);
    }

    public ResponseEntity<Meal> removeMealById(Long id){
        logger.warning("deleting meal: " + id);
        return service.removeMealById(id);
    }

    public ResponseEntity<String> removeMeal(Meal meal){
        logger.warning("deleting meal " + meal.getId());
        return service.removeMeal(meal);
    }

    public ResponseEntity<Meal> updateMeal(Long id, Meal meal){
        logger.info("updating meal " + id + " details");
        return service.updateMeal(id, meal);
    }

    public ResponseEntity<Page<Meal>> getMealByCategory(Category category, int page, int size){
        logger.info("getting page " + page + " by category " + category.getLabel());
        return service.getMealByCategory(category, PageRequest.of(page, size));
    }

    public ResponseEntity<Page<Meal>> getMealByCategory(Category category){
        logger.info("getting page " + 1 + " by category " + category.getLabel());
        return service.getMealByCategory(category, PageRequest.of(1, 12));
    }

    public ResponseEntity<List<Meal>> searchMeal(String query){
        logger.info("searching for: " + query);
        return service.searchMeal(query);
    }
}
