class PontoInteresseModel {
    constructor(nome, posX, posY) {
        this.nome = nome;
        this.posX = posX;
        this.posY = posY;
    }
    // ======== GETTERS e SETTERS ==========
    get getNome() {
        return this.nome;
    }
    get getPosX() {
        return this.posX;
    }
    get getPosY() {
        return this.posY;
    }
    // ------
    set setNome(nome) {
        this.nome = nome;
    }
    set setPosX(posX) {
        this.posX = posX;
    }
    set setPosY(posY) {
        this.posY = posY;
    }
    // ==================
    static converterDoJson(data) {
        return new PontoInteresseModel(data.nome, data.posX, data.posY);
    }
}
export default PontoInteresseModel;
