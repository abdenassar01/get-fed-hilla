package com.lpw.getfed.services.implementations;

import com.lpw.getfed.models.Delivery;
import com.lpw.getfed.models.Order;
import com.lpw.getfed.repositories.DeliveryRepository;
import com.lpw.getfed.repositories.OrderRepository;
import com.lpw.getfed.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service("order_service")
public class OrderServiceImplementation implements OrderService {

    private final OrderRepository repository;
    private final DeliveryRepository deliveryRepository;

    @Autowired
    public OrderServiceImplementation(OrderRepository repository, DeliveryRepository deliveryRepository) {
        this.repository = repository;
        this.deliveryRepository = deliveryRepository;
    }

    @Override
    public Page<Order> getRestorantOrders(Pageable pageable) {
        return repository.findAll(pageable);
    }

//    @Override
//    public ResponseEntity<Page<Order>> getOrdersServedByEmployee(Employee employee, Pageable pageable) {
//        return null;
//    }

    @Override
    public Order getOrderById(Long id) {
        return
                repository.findById(id).orElseThrow(
                        () -> new IllegalStateException("can't find order with id: " + id)
                );
    }

    @Override
    public Order createOrder(Order order) {
        Delivery d = deliveryRepository.findById(
                order.getDelivery().getId()).orElseThrow(
                        () -> new IllegalStateException(
                                "can't find delivery with id: " + order.getDelivery().getId()
                        )
        );
        order.setDelivery(d);
        return repository.save(order);
    }

    @Override
    public String deleteOrder(Order order) {
        repository.delete(order);
        return "order " + order.getId() + " deleted successfully";
    }

    @Override
    public Order deleteOrderById(Long id) {
        Order order = repository.findById(id).orElseThrow(
                () -> new IllegalStateException("can't find order with id: " + id)
        );
        repository.deleteById(id);
        return order;
    }

    @Override
    public Order updateOrder(Long id, Order order) {
        repository.findById(id).orElseThrow(
                () -> new IllegalStateException("can't find order with id: " + id)
        );

        order.setId(id);
        return repository.save(order);
    }

    @Override
    public Page<Order> getOrdersByDelivery(Delivery delivery, Pageable pageable) {
        return repository.findAllByDelivery(delivery, pageable);
    }

    @Override
    public Map<String, Object> countAll() {
        Map<String, Object> count = new HashMap<>();
        count.put("orders", repository.count());
        return count;
    }
}
