var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import PontoInteresseModel from "../models/PontoInteresseModel.js";
import PontoInteresseRepository from "../repository/PontoInteresseRepository.js";
import validaPontoInteresse from "../validation/pontoInteresseValidator.js";
class PontoInteresseService {
    static criarNovoPontoInteresse(data) {
        const dadosValidos = validaPontoInteresse(data);
        const pontoInteresse = PontoInteresseModel.converterDoJson(dadosValidos);
        const pontoInteresseRepository = new PontoInteresseRepository();
        const resposta = pontoInteresseRepository.salvar(pontoInteresse);
        return resposta;
    }
    static coletarTodosPontos() {
        return __awaiter(this, void 0, void 0, function* () {
            const pontoInteresseRepository = new PontoInteresseRepository();
            try {
                const dados = yield pontoInteresseRepository.coletarTodos();
                return dados;
            }
            catch (error) {
                console.error(`Erro ao coletar pontos de interesse: ${error}`);
                throw error;
            }
        });
    }
}
export default PontoInteresseService;
