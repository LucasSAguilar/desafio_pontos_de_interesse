var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import PontoInteresseModel from "../models/PontoInteresseModel.js";
import pool from "../config/database.js";
class PontoInteresseRepository {
    // =========================
    constructor(dbConnection = pool) {
        this.dbConnection = dbConnection;
    }
    // =========================
    salvar(pontoInteresse) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "INSERT INTO PONTOS_INTERESSE (nome, posX, pos) VALUES (?, ?, ?)";
                const values = [
                    pontoInteresse.getNome,
                    pontoInteresse.getPosX,
                    pontoInteresse.getPosY,
                ];
                const [results] = yield this.dbConnection.execute(query, values);
                return results;
            }
            catch (error) {
                throw new Error(`Ocorreu um erro: ${error}`);
            }
        });
    }
    coletarTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "SELECT * FROM PONTOS_INTERESSE";
                const [rows] = yield this.dbConnection.query(query);
                const listaPontosInteresse = rows.map((ponto) => {
                    return new PontoInteresseModel(ponto.nome, ponto.posX, ponto.posY);
                });
                return listaPontosInteresse;
            }
            catch (error) {
                console.error(`Ocorreu um erro: ${error}`);
                throw new Error(`Ocorreu um erro: ${error}`);
            }
        });
    }
}
export default PontoInteresseRepository;
