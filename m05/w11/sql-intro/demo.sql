CREATE TABLE directors (
  director_id SERIAL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  country VARCHAR(30) NOT NULL,
  birth_date DATE
);

CREATE TABLE movies (
  movie_id SERIAL PRIMARY KEY,
  title VARCHAR(60) NOT NULL,
  release_year INTEGER,
  genre VARCHAR(30) NOT NULL,
  directed_by INTEGER REFERENCES directors (director_id)
);

INSERT INTO directors (first_name, last_name, country)
  VALUES ('Steven', 'Spielberg', 'USA');

INSERT INTO directors (first_name, last_name, country)
  VALUES ('Quentin', 'Tarantino', 'USA');

INSERT INTO directors (first_name, last_name, country)
  VALUES ('James', 'Cameron', 'CA');

INSERT INTO directors (first_name, last_name, country)
  VALUES ('Martin', 'Scorsese', 'USA');

INSERT INTO directors (first_name, last_name, country)
  VALUES ('Rock', 'Lee', 'KON');

/* How to get data from a table? */

SELECT * FROM directors;

SELECT director_id, last_name, country FROM directors;

/* Inserting movies into movies table */

INSERT INTO movies (title, release_year, genre, directed_by)
  VALUES ('The Godfather', 1972, 'Drama', 4);

INSERT INTO movies (title, release_year, genre, directed_by)
  VALUES ('Terminator', 1984, 'Action', 3);

INSERT INTO movies (title, release_year, genre, directed_by)
  VALUES ('Alien', 1979, 'Sci-Fi', 3);

INSERT INTO movies (title, release_year, genre, directed_by)
  VALUES ('Avatar', 2009, 'Action', 3);

/* Basic SQL examples */

/* Filter data */

SELECT * FROM movies WHERE genre='Action'

/* Order data */

SELECT * FROM movies ORDER BY title DESC;

/* Joins */

SELECT *
FROM movies
INNER JOIN directors ON movies.directed_by=directors.director_id;

/* Grouping */

SELECT *
FROM movies
GROUP BY movies.genre;

-- SELECT COUNT(movie_id), genre
-- FROM movies
-- INNER JOIN directors ON movies.directed_by=directors.director_id
-- GROUP BY genre;

/* LIMIT and OFFSET */

SELECT * FROM directors LIMIT 1;

SELECT * FROM directors LIMIT 1 OFFSET 1;