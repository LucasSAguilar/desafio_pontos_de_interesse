import mysql from "mysql2/promise";
import PontoInteresseModel from "../models/PontoInteresseModel.js";
import pool from "../config/database.js";
import PontoInteresseInterface from "../interfaces/PontoInteresseInterface.js";

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

  public async coletarTodos(): Promise<PontoInteresseModel[]> {
    try {
      const query = "SELECT * FROM PONTOS_INTERESSE";
      const [rows]: any = await this.dbConnection.query(query);
      const listaPontosInteresse: PontoInteresseModel[] = rows.map((ponto: PontoInteresseInterface)=>{
        return new PontoInteresseModel(ponto.nome, ponto.posX, ponto.posY)
      })
      return listaPontosInteresse;
    } catch (error) {
      console.error(`Ocorreu um erro: ${error}`)
      throw new Error(`Ocorreu um erro: ${error}`)
    }
  }
}

export default PontoInteresseRepository;
