
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

  

}

export default PontoInteresseModel;
