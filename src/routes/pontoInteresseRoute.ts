import { Express, Request, Response } from "express";
import pontoInteresseController from "../controllers/PontoInteresseController.js";
import validaDistanciaMaxima from "../validation/parametrosDistanciaMaxima.js";
import DistanciaMaximaInterface from "../interfaces/DistanciaMaximaInterface.js";
import PontoInteresseModel from "../models/PontoInteresseModel.js";
import PontoInteresseService from "../services/PontoInteresseService.js";

const pontoInteresseRoutes = (app: Express) => {
  const controllerPontoInteresse = new pontoInteresseController();

  app.get("/pontos-interesse", (req: Request, res: Response) => {
    controllerPontoInteresse.exibePontos(req, res);
  });

  app.get(
    "/pontos-interesse/:posX/:posY/:dmax",
    async (req: Request, res: Response) => {
      controllerPontoInteresse.retornaPontosProximos(req, res);
    }
  );

  app.post("/pontos-interesse/novo", (req: Request, res: Response) => {
    controllerPontoInteresse.recebeDados(req, res);
  });
};

export default pontoInteresseRoutes;
