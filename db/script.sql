

CREATE TABLE herois (
    ID SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    poder VARCHAR(100) NOT NULL,
    nivel INT NOT NULL,
    hp INT NOT NULL
);

CREATE TABLE batalhas (
    ID SERIAL PRIMARY KEY,
    heroi1_id INT NOT NULL,
    heroi2_id INT NOT NULL,
    vencedor_id INT NOT NULL,
    FOREIGN KEY (heroi1_id) REFERENCES herois(ID),
    FOREIGN KEY (heroi2_id) REFERENCES herois(ID),
    FOREIGN KEY (vencedor_id) REFERENCES herois(ID)
);

