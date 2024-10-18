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
    static retornarPontosComBaseDistancia(listaPontos, XeYdefinidos) {
        const listaPontosAlcance = [];
        // Itera sobre todos os pontos para calcular a distância e filtrar
        listaPontos.forEach((ponto) => {
            const xDiff = ponto.getPosX - XeYdefinidos.posX; // Diferença de posição X
            const yDiff = ponto.getPosY - XeYdefinidos.posY; // Diferença de posição Y
            // Calcula a distância de Manhattan (somatório das diferenças absolutas)
            const distancia = Math.abs(xDiff) + Math.abs(yDiff);
            // Se a distância estiver dentro do alcance máximo (dmax), adiciona à lista
            if (distancia <= XeYdefinidos.dmax) {
                listaPontosAlcance.push({ ponto, distancia });
            }
        });
        // Ordena os pontos de interesse por distância, da menor para a maior
        listaPontosAlcance.sort((a, b) => a.distancia - b.distancia);
        // Retorna apenas os pontos ordenados por proximidade
        return listaPontosAlcance.map((item) => item.ponto);
    }
}
export default PontoInteresseModel;
