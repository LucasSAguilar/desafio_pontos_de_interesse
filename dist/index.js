"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PontoInteresseModel_js_1 = __importDefault(require("./src/models/PontoInteresseModel.js"));
const app = (0, express_1.default)();
const PORT = 3000;
app.get("/", (req, res) => {
    res.send("Olá, mundo!");
});
const pontoInteresse = new PontoInteresseModel_js_1.default("Teste", 5, 5);
app.listen(PORT, () => console.log(`Servidor rodando em: http://localhost:${PORT}/`));
