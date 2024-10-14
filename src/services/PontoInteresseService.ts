import PontoInteresseModel from "../models/PontoInteresseModel.js";
import PontoInteresseRepository from "../repository/PontoInteresseRepository.js";
import validaPontoInteresse from "../validation/pontoInteresseValidator.js";

class PontoInteresseService {
  public static criarNovoPontoInteresse(data: unknown): Promise<any> {
    const dadosValidos = validaPontoInteresse(data);
    const pontoInteresse: PontoInteresseModel =
      PontoInteresseModel.converterDoJson(dadosValidos);

    const pontoInteresseRepository = new PontoInteresseRepository();
    const resposta = pontoInteresseRepository.salvar(pontoInteresse);

    return resposta;
  }
}

export default PontoInteresseService;
