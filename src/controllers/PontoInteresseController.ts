import { Request, Response } from "express";
import PontoInteresseService from "../services/PontoInteresseService.js";

class pontoInteresseController {
  public async exibePontos(req: Request, res: Response) {
    try {
      const listaPontos = await PontoInteresseService.coletarTodosPontos();
      
      res.status(200).json({ listaPontos });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }

  public recebeDados(req: Request, res: Response) {
    try {
      const response = PontoInteresseService.criarNovoPontoInteresse(req.body);
      res.status(200).send(`Ponto de interesse aceito e salvo com sucesso`);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: "Erro desconhecido." });
      }
    }
  }
}

export default pontoInteresseController;
