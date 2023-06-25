package com.lpw.getfed.services;

import com.lpw.getfed.models.Delivery;
import com.lpw.getfed.models.Employee;
import com.lpw.getfed.models.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public interface OrderService {

    ResponseEntity<Page<Order>> getRestorantOrders(Pageable pageable);
    ResponseEntity<Page<Order>> getOrdersServedByEmployee(Employee employee, Pageable pageable);
    ResponseEntity<Order> getOrderById(Long id);
    ResponseEntity<Order> createOrder(Order order);
    ResponseEntity<Order> deleteOrder(Order order);
    ResponseEntity<Order> deleteOrderById(Long id);
    ResponseEntity<Order> updateOrder(Long id, Order order);
    ResponseEntity<Page<Order>> getOrdersByDelivery(Delivery delivery);

}
