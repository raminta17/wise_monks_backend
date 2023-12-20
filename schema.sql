CREATE DATABASE wise_monks;
USE wise_monks;

CREATE TABLE tutors (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR (20) NOT NULL,
  surname VARCHAR(20) NOT NULL,
  tutor_specialization VARCHAR (20) NOT NULL,
  hourly_price INT
);

CREATE TABLE lessons (
  tutor_id INT,
  lesson_date DATE,
  PRIMARY KEY (tutor_id, lesson_date),
  FOREIGN KEY(tutor_id) REFERENCES tutors(id) ON DELETE CASCADE
);

INSERT INTO tutors(name, surname,tutor_specialization,hourly_price) VALUES
('Paula', 'Goodwin', 'English', 82),
('Bob', 'Johnson', 'Biology', 49),
('Ruben', 'Martin', 'Mathematics', 91),
('Jennifer', 'Frey', 'English', 49),
('George', 'Jones', 'Mathematics', 84),
('Alice', 'Garcia', 'Computer Science', 57),
('Barbara', 'Ruiz', 'History', 43),
('Richard', 'Miller', 'Computer Science', 96);

INSERT INTO lessons VALUES
(1, '2024-01-11'),
(1, '2024-01-12'),
(1, '2024-01-18'),
(1, '2024-01-27'),
(1, '2024-01-15'),
(1, '2024-01-25'),
(2, '2024-01-14'),
(2, '2024-01-20'),
(2, '2024-01-23'),
(2, '2024-01-18'),
(2, '2024-01-10'),
(2,' 2024-01-15'),
(2, '2024-01-02'),
(3, '2024-01-27'),
(3, '2024-01-24'),
(3, '2024-01-05'),
(3, '2024-01-20'),
(3, '2024-01-03'),
(4, '2024-01-20'),
(4, '2024-01-22'),
(4, '2024-01-16'),
(4, '2024-01-19'),
(4, '2024-01-10'),
(4, '2024-01-03'),
(4, '2024-01-15'),
(4, '2024-01-04'),
(5, '2024-01-07'),
(5, '2024-01-08'),
(5, '2024-01-24'),
(5, '2024-01-23'),
(5, '2024-01-11'),
(5, '2024-01-28'),
(6, '2024-01-20'),
(6, '2024-01-19'),
(6, '2024-01-27'),
(6, '2024-01-16'),
(6, '2024-01-02'),
(6, '2024-01-21'),
(7, '2024-01-05'),
(7, '2024-01-21'),
(7, '2024-01-16'),
(7, '2024-01-17'),
(7, '2024-01-09'),
(7, '2024-01-04'),
(7, '2024-01-18'),
(7, '2024-01-11'),
(7, '2024-01-10'),
(7, '2024-01-06'),
(8, '2024-01-21'),
(8, '2024-01-18'),
(8, '2024-01-19'),
(8, '2024-01-23'),
(8, '2024-01-12'),
(8, '2024-01-04');
