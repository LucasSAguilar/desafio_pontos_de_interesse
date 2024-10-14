var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import PontoInteresseService from "../services/PontoInteresseService.js";
class pontoInteresseController {
    exibePontos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listaPontos = yield PontoInteresseService.coletarTodosPontos();
                console.log(listaPontos);
                res.status(200).json({ listaPontos });
            }
            catch (error) {
                res.status(400).json({ error: error });
            }
        });
    }
    recebeDados(req, res) {
        try {
            const response = PontoInteresseService.criarNovoPontoInteresse(req.body);
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
