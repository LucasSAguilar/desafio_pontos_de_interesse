import validaPontoInteresse from "../validation/pontoInteresseValidator.js";
class pontoInteresseController {
    enviaHello(req, res) {
        res.send("Hello, Ponto Interesse");
    }
    recebeDados(req, res) {
        try {
            const pontoInteresse = validaPontoInteresse(req.body);
            res.status(200).send(`Ponto de interesse aceito com sucesso`);
        }
        catch (error) {
            // Verifique se o erro é uma instância de Error antes de acessar .message
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
