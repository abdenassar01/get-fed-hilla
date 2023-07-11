package com.lpw.getfed.endpoints;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

public class AuthEndpoint {


    @AnonymousAllowed
    public String checkUser() {
        Authentication auth =
                SecurityContextHolder.getContext().getAuthentication();
        return auth == null ? null : auth.getName();
    }
}
