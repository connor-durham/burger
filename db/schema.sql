CREATE DATABASE burgerDB;

USE burgerDB;

CREATE TABLE burgers (
id INTEGER AUTO_INCREMENT PRIMARY KEY,
burger_name VARCHAR(100),
devoured BOOLEAN,
date TIMESTAMP);