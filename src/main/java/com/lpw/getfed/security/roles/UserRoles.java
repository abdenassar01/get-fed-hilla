package com.lpw.getfed.security.roles;

import com.google.common.collect.Sets;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Set;
import java.util.stream.Collectors;

import static com.lpw.getfed.security.roles.UserPermissions.*;

public enum UserRoles {

    ADMIN(Sets.newHashSet(USER_READ, USER_WRITE, ORDER_READ, ORDER_WRITE, MEAL_READ, MEAL_WRITE, SUBCATEGORY_WRITE, SUBCATEGORY_READ, DRINK_READ, DRINK_WRITE, DELIVERY_READ, DELIVERY_WRITE)),
    USER(Sets.newHashSet(MEAL_READ, ORDER_READ, ORDER_WRITE, DRINK_READ, DELIVERY_READ, USER_READ, USER_WRITE));

    private final Set<UserPermissions> permissions;

    UserRoles(Set<UserPermissions> permissions) {
        this.permissions = permissions;
    }

    public Set<UserPermissions> getPermissions() {
        return permissions;
    }


    public Set<SimpleGrantedAuthority> getGrantedAuthorities() {
        Set<SimpleGrantedAuthority> permissions = getPermissions().stream()
                .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
                .collect(Collectors.toSet());
        permissions.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
        return permissions;
    }
}
