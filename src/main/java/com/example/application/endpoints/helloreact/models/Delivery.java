package com.example.application.endpoints.helloreact.models;

import com.example.application.endpoints.helloreact.models.Order;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Delivery {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column
    private Double estimateTime;

    @Column
    private Double price;

    @OneToOne(mappedBy = "delivery")
    private Order order;
}
