package com.lpw.getfed.security.roles;

public enum UserPermissions {
    USER_READ("user:read"),
    USER_WRITE("user:write"),
    MEAL_READ("meal:read"),
    MEAL_WRITE("meal:write"),
    DRINK_READ("drink:read"),
    DRINK_WRITE("drink:write"),
    ORDER_READ("order:read"),
    ORDER_WRITE("order:write"),
    SUBCATEGORY_READ("subcategory:read"),
    SUBCATEGORY_WRITE("subcategory:write"),
    DELIVERY_READ("delivery:read"),
    DELIVERY_WRITE("delivery:write");

    public String getPermission() {
        return permission;
    }

    private final String permission;

    UserPermissions(String permission) {
        this.permission = permission;
    }
}