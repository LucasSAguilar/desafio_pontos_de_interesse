CREATE DATABASE IF NOT EXISTS sistema_gps;
USE sistema_gps;

CREATE TABLE IF NOT EXISTS PONTOS_INTERESSE (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome VARCHAR(255) NOT NULL,
posX INT NOT NULL,
posY INT NOT NULL
);

INSERT INTO PONTOS_INTERESSE (nome, posX, posY) VALUES 
('Lanchonete', 27, 12),
('Posto', 31, 18),
('Joalheria', 15, 12),
('Floricultura', 19, 21),
('Pub', 12, 8),
('Supermercado', 23, 6),
('Churrascaria', 28, 2);


SELECT * FROM PONTOS_INTERESSE;