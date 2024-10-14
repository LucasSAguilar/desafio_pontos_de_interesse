import PontoInteresseService from "../services/PontoInteresseService.js";
class pontoInteresseController {
    enviaHello(req, res) {
        res.send("Hello, Ponto Interesse");
    }
    recebeDados(req, res) {
        try {
            const response = PontoInteresseService.criarNovoPontoInteresse(req.body);
            console.log(response);
            res.status(200).send(`Ponto de interesse aceito e salvo com sucesso`);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            }
            else {
                res.status(400).json({ error: "Erro desconhecido." });
            }
        }
    }
}
export default pontoInteresseController;
