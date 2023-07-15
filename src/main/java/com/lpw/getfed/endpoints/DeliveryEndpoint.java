package com.lpw.getfed.endpoints;

import com.lpw.getfed.models.Delivery;
import com.lpw.getfed.services.DeliveryService;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;

@Endpoint
@AnonymousAllowed
public class DeliveryEndpoint {

    Logger logger = LogManager.getLogger(CategoryEndpoint.class);

    private final DeliveryService service;

    @Autowired
    public DeliveryEndpoint(DeliveryService service) {
        this.service = service;
    }

    public Delivery getDeliveryById(Long id){
        logger.info("getting the delivery " + id + " details");
        return service.getDeliveryById(id);
    }

    public Delivery addDelivery(Delivery delivery){
        logger.info("saving new delivery");
        return service.addDelivery(delivery);
    }

    public String removeDelivery(Delivery delivery){
        logger.warn("deleting a delivery item: " + delivery.getId());
        return service.removeDelivery(delivery);
    }

    public Delivery updateDelivery(Long id, Delivery delivery){
        logger.info("updating the delivery " + id + " details");
        return service.updateDelivery(id, delivery);
    }

    public Delivery removeDeliveryById(Long id){
        logger.warn("deleting a delivery item: " + id);
        return service.removeDeliveryById(id);
    }

    public Page<Delivery> getDeliveryOptions(int page, int size){
        logger.info("getting page: " + page + " of delivery options");
        return service.getDeliveryOptions(PageRequest.of(page, size));
    }

    public Page<Delivery> getDeliveryOptions(int page){
        logger.info("getting page: " + page + " of 10 delivery options");
        return service.getDeliveryOptions(PageRequest.of(page, 10));
    }

    public Page<Delivery> getDeliveryOptions(){
        logger.info("getting a page of delivery options");
        return service.getDeliveryOptions(PageRequest.of(0, 20));
    }
}
