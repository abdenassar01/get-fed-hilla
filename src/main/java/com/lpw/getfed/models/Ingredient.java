package com.lpw.getfed.models;

import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Ingredient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String label;
    private String image;
    private Double price;

//    @ManyToOne
//    @JsonIgnore
////    @JoinColumn(name = "meal_id", referencedColumnName = "id")
//    private Meal meal;

    @ManyToOne
//    @JsonIdentityReference(alwaysAsId = true)
    @JoinColumn(name = "sub_category_id", referencedColumnName = "id")
    private SubCategory subCategory;
}
