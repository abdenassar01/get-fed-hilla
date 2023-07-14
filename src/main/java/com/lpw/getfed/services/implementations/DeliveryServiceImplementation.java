package com.lpw.getfed.services.implementations;

import com.lpw.getfed.models.Delivery;
import com.lpw.getfed.repositories.DeliveryRepository;
import com.lpw.getfed.services.DeliveryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service("delivery_service")
public class DeliveryServiceImplementation implements DeliveryService {

    private final DeliveryRepository repository;

    @Autowired
    public DeliveryServiceImplementation(DeliveryRepository repository) {
        this.repository = repository;
    }

    @Override
    public Delivery getDeliveryById(Long id) {
        return
                repository.findById(id).orElseThrow(
                        () -> new IllegalStateException("can't find a delivery with id: " + id)
                );
    }

    @Override
    public Delivery addDelivery(Delivery delivery) {
        return repository.save(delivery);
    }

    @Override
    public String removeDelivery(Delivery delivery) {
        repository.delete(delivery);
        return "delivery item removed successfully";
    }

    @Override
    public Delivery updateDelivery(Long id, Delivery delivery) {
        Delivery oldDelivery = repository.findById(id).orElseThrow(() -> new IllegalStateException("can't find delivery item with id: " + id));

        delivery.setId(oldDelivery.getId());
        repository.delete(oldDelivery);
        return repository.save(delivery);
    }

    @Override
    public Delivery removeDeliveryById(Long id) {
        Delivery oldDelivery = repository.findById(id).orElseThrow(() -> new IllegalStateException("can't find delivery item with id: " + id));
        repository.delete(oldDelivery);
        return oldDelivery;
    }

    @Override
    public Page<Delivery> getDeliveryOptions(Pageable pageable) {
        return repository.findAll(pageable);
    }
}
