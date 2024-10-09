import { Express, Request, Response } from "express";
import pontoInteresseController from "../controllers/PontoInteresseController.js";

const pontoInteresseRoutes = (app: Express) => {
  const controllerPontoInteresse = new pontoInteresseController();

  app.get("/pontos-interesse", (req: Request, res: Response) => {
    controllerPontoInteresse.enviaHello(req, res);
  });
};

export default pontoInteresseRoutes;
