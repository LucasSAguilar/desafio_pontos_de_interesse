import pontoInteresseController from "../controllers/PontoInteresseController.js";
import validaDistanciaMaxima from "../validation/parametrosDistanciaMaxima.js";
const pontoInteresseRoutes = (app) => {
    const controllerPontoInteresse = new pontoInteresseController();
    app.get("/pontos-interesse", (req, res) => {
        controllerPontoInteresse.exibePontos(req, res);
    });
    app.get("/pontos-interesse/:posX/:posY", (req, res) => {
        try {
            const { posX, posY } = req.params;
            const posicoes = {
                posX: Number(posX),
                posY: Number(posY),
            };
            const distanciaMaxima = validaDistanciaMaxima(posicoes);
            res.status(200).json({ distanciaMaxima });
        }
        catch (error) {
            console.error(`Ocorreu um erro: ${error}`);
            res.status(400).json({ erro: error });
        }
    });
    app.post("/pontos-interesse/novo", (req, res) => {
        controllerPontoInteresse.recebeDados(req, res);
    });
};
export default pontoInteresseRoutes;
