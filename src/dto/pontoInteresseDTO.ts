export default class PontoInteresseDTO {
    private nome: string;
    private posX: number;
    private posY: number;

    constructor (nome: string, posX: number, posY: number){
        this.nome = nome,
        this.posX = posX,
        this.posY = posY
    }
}