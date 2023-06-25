package com.lpw.getfed.repositories;

import com.lpw.getfed.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
