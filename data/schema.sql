DROP DATABASE IF EXISTS notes_db;
CREATE DATABASE notes_db;

USE notes_db;

CREATE TABLE notes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(25) NOT NULL,
  note VARCHAR(255) NOT NULL
);

INSERT INTO notes (title, note) VALUES ('#title', '#notes');

