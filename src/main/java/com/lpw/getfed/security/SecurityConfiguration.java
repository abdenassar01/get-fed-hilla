package com.lpw.getfed.security;

import java.util.Base64;
import javax.crypto.spec.SecretKeySpec;

import com.lpw.getfed.services.UserService;
import com.vaadin.flow.spring.security.VaadinWebSecurity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.jose.jws.JwsAlgorithms;

@EnableWebSecurity
@Configuration
public class SecurityConfiguration extends VaadinWebSecurity {

    @Value("${app.secret}")
    private String appSecret;
    public static final String LOGOUT_URL = "/";
    private final PasswordEncoder passwordEncoder;
    private final UserService service;

    @Autowired
    public SecurityConfiguration(PasswordEncoder passwordEncoder, UserService service) {
        this.passwordEncoder = passwordEncoder;
        this.service = service;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests((auth) -> {
            auth.requestMatchers("/admin/**").authenticated();
            auth.requestMatchers("/**").permitAll();
        });

        super.configure(http);
        setLoginView(http, "/login", LOGOUT_URL);

        http.sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        setStatelessAuthentication(http, new SecretKeySpec(Base64.getDecoder().decode(appSecret), JwsAlgorithms.HS256),
                "com.lpw.getfed"
        );
    }

    @Override
    public void configure(WebSecurity web) throws Exception {
        super.configure(web);
        web.ignoring().requestMatchers("/images/*.png");
    }


    @Bean
    public DaoAuthenticationProvider daoAuthenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setPasswordEncoder(passwordEncoder);
        provider.setUserDetailsService(service);
        return provider;
    }
}
