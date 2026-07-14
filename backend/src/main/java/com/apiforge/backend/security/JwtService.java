package com.apiforge.backend.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import io.jsonwebtoken.security.Keys;
import java.security.Key;
import java.nio.charset.StandardCharsets;

@Service
public class JwtService {
    private static final Key SECRET_KEY =
        Keys.hmacShaKeyFor(
                "mySecretKeyForApiForgeProject123456789123456789"
                        .getBytes(StandardCharsets.UTF_8));

    private static final long JWT_EXPIRATION = 1000 * 60 * 60 * 24;

    public String generateToken(String email) {
        return Jwts.builder()
                .setSubject(email)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + JWT_EXPIRATION))
                .signWith(SECRET_KEY, SignatureAlgorithm.HS256)
                .compact();
    }

    public String extractUsername(String token) {
    return extractAllClaims(token).getSubject();
    }

    private Claims extractAllClaims(String token) {
    return Jwts.parserBuilder()
            .setSigningKey(SECRET_KEY)
            .build()
            .parseClaimsJws(token)
            .getBody();
    }
    public Date extractExpiration(String token) {
    return extractAllClaims(token).getExpiration();
    }

    private boolean isTokenExpired(String token) {
    return extractExpiration(token).before(new Date());
    }

    public boolean isTokenValid(String token, String email) {
    final String username = extractUsername(token);
    return username.equals(email) && !isTokenExpired(token);
    }

}