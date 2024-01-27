CREATE DATABASE bt_app;

CREATE TABLE person
    (
        id SERIAL PRIMARY KEY,
        email VARCHAR(64) NOT NULL UNIQUE,
        name VARCHAR(64),
        password VARCHAR(64) NOT NULL,
        last_login TIMESTAMP,
        created_at TIMESTAMP NOT NULL,
        updated_at TIMESTAMP
    );