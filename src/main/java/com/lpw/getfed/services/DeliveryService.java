package com.lpw.getfed.services;

import com.lpw.getfed.models.Delivery;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

@Qualifier("delivery_service")
public interface DeliveryService {

    Delivery getDeliveryById(Long id);
    Delivery addDelivery(Delivery delivery);
    String removeDelivery(Delivery delivery);
    Delivery updateDelivery(Long id, Delivery delivery);
    Delivery removeDeliveryById(Long id);
    Page<Delivery> getDeliveryOptions(Pageable pageable);

}
