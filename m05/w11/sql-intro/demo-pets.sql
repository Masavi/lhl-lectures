-- Creates a database :P
CREATE DATABASE petsDB;

-- Create tables for students and pets
CREATE TABLE students (
  student_id SERIAL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  email VARCHAR(50)
);

CREATE TABLE pets (
  pet_id SERIAL PRIMARY KEY,
  pet_type VARCHAR(20) NOT NULL,
  color VARCHAR(20),
  owner_id INTEGER REFERENCES students (student_id)
);

-- INSERTING DATA into students

INSERT INTO students (first_name, last_name, email)
  VALUES ('Mauricio', 'Saavedra', 'mau@gmail.com');

INSERT INTO students (first_name, last_name, email)
  VALUES ('Clement', 'Shum', 'clement@gmail.com');

INSERT INTO students (first_name, last_name, email)
  VALUES ('Kevin', 'Cogen', 'kevin@gmail.com');

INSERT INTO students (first_name, last_name, email)
  VALUES ('Getenesh', 'Guta', 'getenesh@gmail.com');

INSERT INTO students (first_name, last_name, email)
  VALUES ('Denny', 'Ng', 'denny@gmail.com');

-- UPDATE EXISTING TABLE TO ADD NEW COLUMN

ALTER TABLE pets
  ADD breed VARCHAR(30);

-- INSERTING DATA into pets

INSERT INTO pets (pet_type, breed, color, owner_id)
  VALUES ('Dog', 'Sausage', 'brown', 4);

INSERT INTO pets (pet_type, breed, color, owner_id)
  VALUES ('Fish', 'Beta', 'orange', 2);

INSERT INTO pets (pet_type, breed, color, owner_id)
  VALUES ('Cat', 'Shorthair', 'orange', 3);

INSERT INTO pets (pet_type, breed, color, owner_id)
  VALUES ('Cat', 'Maine Coon', 'black', 3);

INSERT INTO pets (pet_type, breed, color, owner_id)
  VALUES ('Unicorn', 'Awesome', 'white', 4);

INSERT INTO pets (pet_type, breed, color, owner_id)
  VALUES ('Dog', 'Bulldog', 'brown', 5);


-- HOW TO READ DATA FROM TABLES

-- 1) `SELECT` Statements

SELECT breed, color FROM pets;

SELECT * FROM pets;

-- 2) Filtering and ordering

SELECT * FROM pets WHERE color='orange';
SELECT * FROM pets WHERE pet_type='Dog';

SELECT * FROM pets ORDER BY pet_type;
SELECT * FROM pets ORDER BY pet_type DESC;

SELECT * FROM pets
  WHERE pet_type!='Fish'
  ORDER BY pet_type DESC;

-- 3) Joining tables

-- Intersection
SELECT * FROM pets
  INNER JOIN students
  ON pets.owner_id = students.student_id;

SELECT pets.pet_id, pets.breed, pets.pet_type, students.first_name, students.last_name
  FROM pets, students
  WHERE pets.owner_id = students.student_id;

-- Throws everything, event if conditions are not met or NULL

SELECT * FROM pets
  FULL OUTER JOIN students
  ON pets.owner_id = students.student_id;

INSERT INTO pets (pet_type, breed, color)
  VALUES ('Bat', 'Murdoc', 'white');

SELECT * FROM pets
  FULL OUTER JOIN students
  ON pets.owner_id = students.student_id
  WHERE pets.owner_id IS null
  OR students.student_id IS null;

-- 4) AGGREGATE functions

SELECT MIN(student_id) FROM students;
SELECT MAX(student_id) FROM students;

-- 5) Grouping records

SELECT COUNT(color), color FROM pets GROUP BY color;

-- 6) LIMIT and OFFSET

SELECT * FROM pets
  JOIN students
  ON pets.owner_id = students.student_id
  LIMIT 2 OFFSET 6;