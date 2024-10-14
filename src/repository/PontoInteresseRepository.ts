import mysql from "mysql2/promise";
import PontoInteresseModel from "../models/PontoInteresseModel.js";
import pool from "../config/database.js";

class PontoInteresseRepository {
  private dbConnection: mysql.Pool;

  // =========================

  constructor(dbConnection: mysql.Pool = pool) {
    this.dbConnection = dbConnection;
  }

  // =========================

  public async salvar(pontoInteresse: PontoInteresseModel): Promise<any> {
    try {
      const query =
        "INSERT INTO PONTOS_INTERESSE (nome, posX, pos) VALUES (?, ?, ?)";
      const values = [
        pontoInteresse.getNome,
        pontoInteresse.getPosX,
        pontoInteresse.getPosY,
      ];

      const [results] = await this.dbConnection.execute(query, values);
      return results;
    } catch (error) {
      throw new Error(`Ocorreu um erro: ${error}`);
    }
  }
}

export default PontoInteresseRepository;
