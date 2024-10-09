class pontoInteresseController {
    enviaHello(req, res) {
        res.send("Hello, Ponto Interesse");
    }
    recebeDados(req, res) {
        res.send("Dados recebidos");
    }
}
export default pontoInteresseController;
