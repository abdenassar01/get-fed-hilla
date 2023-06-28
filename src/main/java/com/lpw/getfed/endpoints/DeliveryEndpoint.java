package com.lpw.getfed.endpoints;

import com.lpw.getfed.models.Delivery;
import com.lpw.getfed.services.DeliveryService;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;

import java.util.logging.Logger;

@Endpoint
@AnonymousAllowed
public class DeliveryEndpoint {

    Logger logger = (Logger) LoggerFactory.getLogger(DeliveryEndpoint.class);

    private final DeliveryService service;

    @Autowired
    public DeliveryEndpoint(DeliveryService service) {
        this.service = service;
    }

    public ResponseEntity<Delivery> getDeliveryById(Long id){
        logger.info("getting the delivery " + id + " details");
        return service.getDeliveryById(id);
    }

    public ResponseEntity<Delivery> addDelivery(Delivery delivery){
        logger.info("saving new delivery");
        return service.addDelivery(delivery);
    }

    public ResponseEntity<String> removeDelivery(Delivery delivery){
        logger.warning("deleting a delivery item: " + delivery.getId());
        return service.removeDelivery(delivery);
    }

    public ResponseEntity<Delivery> updateDelivery(Long id, Delivery delivery){
        logger.info("updating the delivery " + id + " details");
        return service.updateDelivery(id, delivery);
    }

    public ResponseEntity<Delivery> removeDeliveryById(Long id){
        logger.warning("deleting a delivery item: " + id);
        return service.removeDeliveryById(id);
    }

    public ResponseEntity<Page<Delivery>> getDeliveryOptions(int page, int size){
        logger.info("getting page: " + page + " of delivery options");
        return service.getDeliveryOptions(PageRequest.of(page, size));
    }

    public ResponseEntity<Page<Delivery>> getDeliveryOptions(int page){
        logger.info("getting page: " + page + " of 10 delivery options");
        return service.getDeliveryOptions(PageRequest.of(page, 10));
    }

    public ResponseEntity<Page<Delivery>> getDeliveryOptions(){
        logger.info("getting a page of delivery options");
        return service.getDeliveryOptions(PageRequest.of(1, 20));
    }
}
