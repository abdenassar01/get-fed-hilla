package com.lpw.getfed.endpoints;

import com.lpw.getfed.models.Delivery;
import com.lpw.getfed.models.Order;
import com.lpw.getfed.services.OrderService;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;

@Endpoint
@AnonymousAllowed
public class OrderEndpoint {

    Logger logger = LogManager.getLogger(CategoryEndpoint.class);

    private final OrderService service;

    @Autowired
    public OrderEndpoint(OrderService service) {
        this.service = service;
    }

    public ResponseEntity<Page<Order>> getRestorantOrders(int page, int size){
        logger.info("getting page " + page + " of orders");
        return service.getRestorantOrders(PageRequest.of(page, size));
    }

    public ResponseEntity<Page<Order>> getRestorantOrders(){
        logger.info("getting page " + 1 + " of orders");
        return service.getRestorantOrders(PageRequest.of(1, 12));
    }

    public ResponseEntity<Order> getOrderById(Long id){
        logger.info("getting order " + id + " details");
        return service.getOrderById(id);
    }

    public ResponseEntity<Order> createOrder(Order order){
        logger.info("adding new order " + order.getId());
        return service.createOrder(order);
    }

    public ResponseEntity<String> deleteOrder(Order order){
        logger.warn("deleting order " + order.getId());
        return service.deleteOrder(order);
    }

    public ResponseEntity<Order> deleteOrderById(Long id){
        logger.warn("deleting order " + id);
        return service.deleteOrderById(id);
    }

    public ResponseEntity<Order> updateOrder(Long id, Order order){
        logger.info("updating order " + id + " infos");
        return service.updateOrder(id, order);
    }

    public ResponseEntity<Page<Order>> getOrdersByDelivery(Delivery delivery, int page, int size){
        logger.info("getting page " + page + " of orders by the delivery " + delivery.getId());
        return service.getOrdersByDelivery(delivery, PageRequest.of(page, size));
    }

    public ResponseEntity<Page<Order>> getOrdersByDelivery(Delivery delivery){
        logger.info("getting first page of orders by the delivery " + delivery.getId());
        return service.getOrdersByDelivery(delivery, PageRequest.of(1, 12));
    }
}
