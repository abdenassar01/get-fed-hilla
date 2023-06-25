package com.lpw.getfed.services;

import com.lpw.getfed.models.Delivery;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public interface DeliveryService {

    ResponseEntity<Delivery> getDeliveryById(Long id);
    ResponseEntity<Delivery> addDelivery(Delivery delivery);
    ResponseEntity<Delivery> removeDelivery(Delivery delivery);
    ResponseEntity<Delivery> updateDelivery(Long id, Delivery delivery);
    ResponseEntity<Delivery> removeDeliveryById(Long id);
    ResponseEntity<Page<Delivery>> getDeliveryOptions(Pageable pageable);

}
