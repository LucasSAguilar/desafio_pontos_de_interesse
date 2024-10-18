var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import pontoInteresseController from "../controllers/PontoInteresseController.js";
const pontoInteresseRoutes = (app) => {
    const controllerPontoInteresse = new pontoInteresseController();
    app.get("/pontos-interesse", (req, res) => {
        controllerPontoInteresse.exibePontos(req, res);
    });
    app.get("/pontos-interesse/:posX/:posY/:dmax", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        controllerPontoInteresse.retornaPontosProximos(req, res);
    }));
    app.post("/pontos-interesse/novo", (req, res) => {
        controllerPontoInteresse.recebeDados(req, res);
    });
};
export default pontoInteresseRoutes;
