package com.lpw.getfed.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Delivery {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String label;
    private Double estimateTime;
    private Double price;

    @OneToMany(mappedBy = "delivery", cascade = CascadeType.MERGE, orphanRemoval = true)
    @JsonIgnore
    private List<Order> orders;
}
