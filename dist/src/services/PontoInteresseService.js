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
}
export default PontoInteresseService;
