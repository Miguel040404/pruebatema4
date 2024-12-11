DROP DATABASE IF EXISTS hospital;

CREATE DATABASE hospital;
USE hospital;


CREATE TABLE medicos (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL,
    especialidad VARCHAR(20),
    perfil VARCHAR(30),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ALTER TABLE medicos ADD COLUMN imagen VARCHAR(200) AFTER descripcion;

INSERT INTO medicos (nombre, especialidad, perfil) 
VALUES 
  ('MJ  ', 'traumatologo', 'especialista'),
  ('Emi  ', 'traumatologo', 'especialista'),
  ('Miguel  ', 'traumatologo', 'especialista');

  


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
