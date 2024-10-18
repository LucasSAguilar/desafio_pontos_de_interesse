import { Request, Response } from "express";
import PontoInteresseService from "../services/PontoInteresseService.js";
import DistanciaMaximaInterface from "../interfaces/DistanciaMaximaInterface.js";
import validaDistanciaMaxima from "../validation/parametrosDistanciaMaxima.js";
import PontoInteresseModel from "../models/PontoInteresseModel.js";

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

  public async retornaPontosProximos(req: Request, res: Response) {
    try {
      const { posX, posY, dmax } = req.params;
      const posicoes: DistanciaMaximaInterface = {
        posX: Number(posX),
        posY: Number(posY),
        dmax: Number(dmax),
      };

      const listaPontos: Array<PontoInteresseModel> = await PontoInteresseService.coletarTodosPontos();

      const distanciaMaxima: DistanciaMaximaInterface = validaDistanciaMaxima(posicoes);
      const listaPontosProximos: Array<PontoInteresseModel> = PontoInteresseModel.retornarPontosComBaseDistancia(listaPontos, distanciaMaxima)
      
      res.status(200).json({ listaPontosProximos });
    } catch (error) {
      console.error(`Ocorreu um erro: ${error}`);
      res.status(400).json({ erro: error });
    }
  }
}

export default pontoInteresseController;
