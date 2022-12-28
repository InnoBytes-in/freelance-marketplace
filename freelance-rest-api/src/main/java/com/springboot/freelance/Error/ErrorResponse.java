package com.springboot.freelance.Error;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Map;

@Data
@NoArgsConstructor
public class ErrorResponse {

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyy-MM-dd hh:mm:ss")
    private LocalDateTime timestamp;

    private int status;

    private String message;

    private String url;

    private Map<String, String> errors;

    public ErrorResponse(LocalDateTime timestamp, int status, String message, String url) {
        this.timestamp = timestamp;
        this.status = status;
        this.message = message;
        this.url = url;
    }
}
