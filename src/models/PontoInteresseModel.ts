import DistanciaMaximaInterface from "../interfaces/DistanciaMaximaInterface.js";
import PontoInteresseInterface from "../interfaces/PontoInteresseInterface.js";

class PontoInteresseModel {
  private nome: string;
  private posX: number;
  private posY: number;

  constructor(nome: string, posX: number, posY: number) {
    this.nome = nome;
    this.posX = posX;
    this.posY = posY;
  }

  // ======== GETTERS e SETTERS ==========

  public get getNome(): string {
    return this.nome;
  }
  public get getPosX(): number {
    return this.posX;
  }
  public get getPosY(): number {
    return this.posY;
  }

  // ------

  public set setNome(nome: string) {
    this.nome = nome;
  }
  public set setPosX(posX: number) {
    this.posX = posX;
  }
  public set setPosY(posY: number) {
    this.posY = posY;
  }

  // ==================

  public static converterDoJson(
    data: PontoInteresseInterface
  ): PontoInteresseModel {
    return new PontoInteresseModel(data.nome, data.posX, data.posY);
  }

  public static retornarPontosComBaseDistancia(
    listaPontos: Array<PontoInteresseModel>,
    XeYdefinidos: DistanciaMaximaInterface
  ): Array<PontoInteresseModel> {
    const listaPontosAlcance: Array<{ ponto: PontoInteresseModel; distancia: number }> = [];
  
    listaPontos.forEach((ponto) => {
      const xDiff = ponto.getPosX - XeYdefinidos.posX; 
      const yDiff = ponto.getPosY - XeYdefinidos.posY; 
  
      const distancia = Math.abs(xDiff) + Math.abs(yDiff);
  
      if (distancia <= XeYdefinidos.dmax) {
        listaPontosAlcance.push({ ponto, distancia });
      }
    });
  
    listaPontosAlcance.sort((a, b) => a.distancia - b.distancia);
  
    return listaPontosAlcance.map((item) => item.ponto);
  }
  
}

export default PontoInteresseModel;
