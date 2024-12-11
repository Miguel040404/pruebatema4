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


CREATE TABLE pacientes (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL,
    localidad VARCHAR(40),
    fecha_nacimiento DATE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ALTER TABLE medicos ADD COLUMN imagen VARCHAR(200) AFTER descripcion;

INSERT INTO pacientes (nombre, localidad, fecha_nacimiento) 
VALUES 
  ('Pepa', 'Aguilar', '2000-01-15'),
  ('Pepi', 'Aguilar', '2000-01-15'),
  ('Pepo', 'Aguilar', '2000-01-15');
