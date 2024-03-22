package com.backend.rentamaq.security.jwt;

import com.backend.rentamaq.entity.Role;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
public class JwtUtil {
    private String SECRET_KEY = "supersecret";

    public String extractEmail(String token) {
        return extractClaimEmail(token);
    }

    public Long extractUserId(String token) {
        Claims claims = extractAllClaims(token);
        return claims.get("userId", Long.class);
    }

    public Date extractExpiration(String token) {
        return extractClaimDate(token);
    }

    public Date extractClaimDate(String token) {
        Claims claims = extractAllClaims(token);
        return claims.getExpiration();
    }

    public String extractClaimEmail(String token) {
        Claims claims = extractAllClaims(token);
        return claims.getSubject();
    }

    public Claims extractAllClaims(String token) {
        return Jwts.parser()
                .setSigningKey(SECRET_KEY)
                .parseClaimsJws(token)
                .getBody();
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    public String generateToken(String email, Long userId, Set<Role> roles) {
        Map<String, Object> claims = new HashMap<>();
        Set<String> userRoles = new HashSet<>();
        for (Role role : roles) {
            userRoles.add(role.getName());
        }
        claims.put("roles", userRoles);
        claims.put("userId", userId);
        return createToken(claims, email);
    }

    private String createToken(Map<String, Object> claims, String email) {
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(email)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 24 * 60 * 60 * 1000))
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY).compact();
    }

    public Boolean validateToken(String token, UserDetails userDetails) {
        final String email = extractEmail(token);
        return (email.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }
}
