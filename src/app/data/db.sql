DROP DATABASE IF EXISTS hospital;

CREATE DATABASE hospital;
USE hospital;


CREATE TABLE medicos (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    localidad VARCHAR(200),
    fecha_nacimiento DATE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ALTER TABLE medicos ADD COLUMN imagen VARCHAR(200) AFTER descripcion;

INSERT INTO medicos (nombre, localidad, fecha_nacimiento) 
VALUES 
  ('MJ  ', 'Aguilar', '2000-01-15'),
  ('Emi  ', 'Aguilar', '2000-01-15'),
  ('Miguel  ', 'Aguilar', '2000-01-15');



CREATE TABLE profesores (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL,
    especialidad VARCHAR(20),
    estado_civil VARCHAR(30),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ALTER TABLE medicos ADD COLUMN imagen VARCHAR(200) AFTER descripcion;

INSERT INTO profesores (nombre, especialidad, estado_civil) 
VALUES 
  ('Pepe', 'Docente', 'casado'),
  ('Pepa', 'Docente', 'viudo'),
  ('Pepi', 'Docente', 'pollo');
