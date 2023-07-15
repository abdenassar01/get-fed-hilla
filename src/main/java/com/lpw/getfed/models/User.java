package com.lpw.getfed.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

import static com.lpw.getfed.security.roles.UserRoles.*;


@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "user", uniqueConstraints = @UniqueConstraint(name = "Uk_username", columnNames = { "username" }))
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private String address;
    private String phone;
    private String role;

    @OneToMany(mappedBy = "user", cascade = CascadeType.MERGE, orphanRemoval = true)
    @JsonIgnore
    private List<Order> orders;

    @JsonIgnore
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if (getRole().equalsIgnoreCase("Admin")){
            return ADMIN.getGrantedAuthorities();
        }
        return USER.getGrantedAuthorities();
    }

    @Override
    @JsonIgnore
    @Column(columnDefinition = "boolean default true")
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    @JsonIgnore
    @Column(columnDefinition = "boolean default true")
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    @JsonIgnore
    @Column(columnDefinition = "boolean default true")
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    @JsonIgnore
    @Column(columnDefinition = "boolean default true")
    public boolean isEnabled() {
        return true;
    }
}
