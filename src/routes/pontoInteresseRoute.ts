import { Express, Request, Response } from "express";
import pontoInteresseController from "../controllers/PontoInteresseController.js";
import validaDistanciaMaxima from "../validation/parametrosDistanciaMaxima.js";
import DistanciaMaximaInterface from "../interfaces/DistanciaMaximaInterface.js";

const pontoInteresseRoutes = (app: Express) => {
  const controllerPontoInteresse = new pontoInteresseController();

  app.get("/pontos-interesse", (req: Request, res: Response) => {
    controllerPontoInteresse.exibePontos(req, res);
  });

  app.get("/pontos-interesse/:posX/:posY", (req: Request, res: Response) => {
    try {
      const { posX, posY } = req.params;
      const posicoes = {
        posX: Number(posX),
        posY: Number(posY),
      };
      
      const distanciaMaxima = validaDistanciaMaxima(posicoes);
      res.status(200).json({ distanciaMaxima });
    } catch (error) {
      console.error(`Ocorreu um erro: ${error}`);
      res.status(400).json({ erro: error });
    }
  });

  app.post("/pontos-interesse/novo", (req: Request, res: Response) => {
    controllerPontoInteresse.recebeDados(req, res);
  });
};

export default pontoInteresseRoutes;
