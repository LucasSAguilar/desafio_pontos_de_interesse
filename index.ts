import express from "express";
import PontoInteresseModel from "./src/models/PontoInteresseModel.js";
import pool from "./src/config/database.js";
import PontoInteresseRepository from "./src/repository/PontoInteresseRepository.js";
import pontoInteresseRoutes from "./src/routes/pontoInteresseRoute.js";

const app = express();
const PORT: number = 3000;

app.get("/", (req, res) => {
  res.send("Olá, mundo!");
});

pontoInteresseRoutes(app);

app.listen(PORT, () =>
  console.log(`Servidor rodando em: http://localhost:${PORT}/`)
);
