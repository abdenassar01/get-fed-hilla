package com.lpw.getfed.endpoints;

import com.lpw.getfed.services.MealService;
import com.lpw.getfed.services.OrderService;
import com.lpw.getfed.services.UserService;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashMap;
import java.util.Map;

@Endpoint
@AnonymousAllowed
public class DashboardEndpoint {

    private final UserService user;
    private final MealService meal;
    private final OrderService order;

    @Autowired
    public DashboardEndpoint(UserService user, MealService meal, OrderService order) {
        this.user = user;
        this.meal = meal;
        this.order = order;
    }

    public Map<String, Object> countAll() {
        Map<String, Object> count = new HashMap<>();
        count.put("order", order.countAll());
        count.put("user", user.countAll());
        count.put("meal", meal.countAll());
        return count;
    }
}
