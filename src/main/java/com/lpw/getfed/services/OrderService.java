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

    Page<Order> getRestorantOrders(Pageable pageable);
//    Page<Order> getOrdersServedByEmployee(Employee employee, Pageable pageable);
    Order getOrderById(Long id);
    Order createOrder(Order order);
    String deleteOrder(Order order);
    Order deleteOrderById(Long id);
    Order updateOrder(Long id, Order order);
    Page<Order> getOrdersByDelivery(Delivery delivery, Pageable page);
    Map<String, Object> countAll();

}
