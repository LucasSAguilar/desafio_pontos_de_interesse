import pontoInteresseController from "../controllers/PontoInteresseController.js";
const pontoInteresseRoutes = (app) => {
    const controllerPontoInteresse = new pontoInteresseController();
    app.get("/pontos-interesse", (req, res) => {
        controllerPontoInteresse.enviaHello(req, res);
    });
    app.post("/pontos-interesse/novo", (req, res) => {
        controllerPontoInteresse.recebeDados(req, res);
    });
};
export default pontoInteresseRoutes;
