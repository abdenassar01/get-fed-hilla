package com.lpw.getfed.services.implementations;

import com.lpw.getfed.models.Delivery;
import com.lpw.getfed.models.Order;
import com.lpw.getfed.repositories.OrderRepository;
import com.lpw.getfed.services.OrderService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service("order_service")
public class OrderServiceImplementation implements OrderService {

    private final OrderRepository repository;

    public OrderServiceImplementation(OrderRepository repository) {
        this.repository = repository;
    }

    @Override
    public ResponseEntity<Page<Order>> getRestorantOrders(Pageable pageable) {
        return ResponseEntity.ok(repository.findAll(pageable));
    }

//    @Override
//    public ResponseEntity<Page<Order>> getOrdersServedByEmployee(Employee employee, Pageable pageable) {
//        return null;
//    }

    @Override
    public ResponseEntity<Order> getOrderById(Long id) {
        return ResponseEntity.ok(
                repository.findById(id).orElseThrow(
                        () -> new IllegalStateException("can't find order with id: " + id)
                )
        );
    }

    @Override
    public ResponseEntity<Order> createOrder(Order order) {
        return ResponseEntity.ok(repository.save(order));
    }

    @Override
    public ResponseEntity<String> deleteOrder(Order order) {
        repository.delete(order);
        return ResponseEntity.ok("order " + order.getId() + " deleted successfully");
    }

    @Override
    public ResponseEntity<Order> deleteOrderById(Long id) {
        Order order = repository.findById(id).orElseThrow(
                () -> new IllegalStateException("can't find order with id: " + id)
        );
        repository.deleteById(id);
        return ResponseEntity.ok(order);
    }

    @Override
    public ResponseEntity<Order> updateOrder(Long id, Order order) {
        repository.findById(id).orElseThrow(
                () -> new IllegalStateException("can't find order with id: " + id)
        );

        order.setId(id);
        return ResponseEntity.ok(repository.save(order));
    }

    @Override
    public ResponseEntity<Page<Order>> getOrdersByDelivery(Delivery delivery, Pageable pageable) {
        return ResponseEntity.ok(repository.findAllByDelivery(delivery, pageable));
    }
}
