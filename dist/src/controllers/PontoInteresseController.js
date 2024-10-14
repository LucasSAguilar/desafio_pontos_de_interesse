import validaPontoInteresse from "../validation/pontoInteresseValidator.js";
class pontoInteresseController {
    enviaHello(req, res) {
        res.send("Hello, Ponto Interesse");
    }
    recebeDados(req, res) {
        try {
            const novoPontoInteresse = validaPontoInteresse(req.body);
            res.status(200).send(`Ponto de interesse aceito com sucesso`);
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
