import express, { json } from "express";
import pontoInteresseRoutes from "./src/routes/pontoInteresseRoute.js";

const app = express();
const PORT: number = 3000;

app.use(json())

app.get("/", (req, res) => {
  res.send("Olá, mundo!");
});

pontoInteresseRoutes(app);

app.listen(PORT, () =>
  console.log(`Servidor rodando em: http://localhost:${PORT}/`)
);
