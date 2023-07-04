package com.lpw.getfed.models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Drink {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "drink_id")
    private Long id;

    @Column(length = 255)
    private String label;

    private String image;

    @Column(length = 3000)
    private String description;

    private Double price;

    @ManyToMany()
    @JsonIgnore
    private List<Order> orders;
}
