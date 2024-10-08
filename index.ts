import express from "express";
import PontoInteresseModel from "./src/models/PontoInteresseModel.js";


const app = express();
const PORT: number = 3000;

app.get("/", (req, res) => {
  res.send("Olá, mundo!");
});

const pontoInteresse = new PontoInteresseModel("Teste", 5, 5);


app.listen(PORT, () =>
  console.log(`Servidor rodando em: http://localhost:${PORT}/`)
);
