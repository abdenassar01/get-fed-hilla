package com.example.application.endpoints.helloreact.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Category {


    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(length = 100)
    private String label;

    @Column(length = 50)
    private String icon;

    @OneToMany(cascade = CascadeType.MERGE, orphanRemoval = true)
    private List<Meal> meals;

}
