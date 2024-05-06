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
