-- Script SQL d'exemple pour initialiser la base de données `employee_db`
-- Crée la base et pré-remplit quelques départements et responsabilités

CREATE DATABASE employee_db;

INSERT INTO departments (name, createdAt, updatedAt)
VALUES
('IT', NOW(), NOW()),
('Finance', NOW(), NOW()),
('HR', NOW(), NOW());

INSERT INTO Responsibilities (name, createdAt, updatedAt)
VALUES
('Development', NOW(), NOW()),
('Testing', NOW(), NOW()),
('Reporting', NOW(), NOW());