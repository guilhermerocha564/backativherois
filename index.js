const express = require("express");
const { Pool } = require("pg");

const app = express();
const PORT = 9898;

app.use(express.json());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "backherois",
  password: "ds564",
  port: 7007,
});

app.use(express.json());

app.get("/herois", async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM herois");
  res.json(rows);
});

app.post("/herois", async (req, res) => {
  const { nome, poder } = req.body;
  await pool.query("INSERT INTO herois (nome, poder) VALUES ($1, $2, 3$, 4$)", [
    nome,
    poder,
    nivel,
    hp,
  ]);
  res.send("Herói cadastrado com sucesso");
});

app.get("/herois/:id", async (req, res) => {
  const { id } = req.params;
  const { rows } = await pool.query("SELECT * FROM herois WHERE id = $1", [id]);
  res.json(rows);
});
