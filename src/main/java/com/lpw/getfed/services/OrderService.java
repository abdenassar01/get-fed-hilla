package com.lpw.getfed.services;

import com.lpw.getfed.models.Delivery;
import com.lpw.getfed.models.Order;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

import java.util.Map;

@Qualifier("order_service")
public interface OrderService {

    ResponseEntity<Page<Order>> getRestorantOrders(Pageable pageable);
//    ResponseEntity<Page<Order>> getOrdersServedByEmployee(Employee employee, Pageable pageable);
    ResponseEntity<Order> getOrderById(Long id);
    ResponseEntity<Order> createOrder(Order order);
    ResponseEntity<String> deleteOrder(Order order);
    ResponseEntity<Order> deleteOrderById(Long id);
    ResponseEntity<Order> updateOrder(Long id, Order order);
    ResponseEntity<Page<Order>> getOrdersByDelivery(Delivery delivery, Pageable page);
    Map<String, Object> countAll();

}
