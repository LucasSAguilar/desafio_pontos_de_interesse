import mysql from "mysql2/promise";

class PontoInteresseRepository {
  private dbConnection: mysql.Pool;

  constructor(dbConnection: mysql.Pool) {
    this.dbConnection = dbConnection;
  }

  public coletarPontoInteressePorId(id: number) {}
}

export default PontoInteresseRepository;
