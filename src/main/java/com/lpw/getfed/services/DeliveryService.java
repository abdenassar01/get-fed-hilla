package com.lpw.getfed.services;

import com.lpw.getfed.models.Delivery;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

@Qualifier("delivery_service")
public interface DeliveryService {

    ResponseEntity<Delivery> getDeliveryById(Long id);
    ResponseEntity<Delivery> addDelivery(Delivery delivery);
    ResponseEntity<String> removeDelivery(Delivery delivery);
    ResponseEntity<Delivery> updateDelivery(Long id, Delivery delivery);
    ResponseEntity<Delivery> removeDeliveryById(Long id);
    ResponseEntity<Page<Delivery>> getDeliveryOptions(Pageable pageable);

}
