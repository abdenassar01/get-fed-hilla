package com.lpw.getfed.models;

import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;
import java.util.List;

@Entity
@Table(name="MEAL")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Meal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "meal_id")
    private Long id;

    private String title;
    private String image;
    @Column(name = "description", length = 2500)
    private String description;
    private Integer rating;
    private Double price;

    private Date dateCreated;

    @Column(columnDefinition = "boolean default false")
    private Boolean custom;

    @ManyToOne
//    @JsonIdentityReference(alwaysAsId = true)
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    private Category category;

//    @OneToMany(mappedBy = "meal", cascade = CascadeType.ALL, orphanRemoval = true)
//    @Size(min=1, message="You must choose at least 1 ingredient")
//    private List<Ingredient> ingredients;

    @ManyToMany
    @JsonIgnore
    private List<Order> order;

}
