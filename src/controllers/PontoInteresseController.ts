import { Request, Response } from "express";
import validaPontoInteresse from "../validation/pontoInteresseValidator.js";

class pontoInteresseController {
  public enviaHello(req: Request, res: Response) {
    res.send("Hello, Ponto Interesse");
  }

  public recebeDados(req: Request, res: Response) {
    try {
      const pontoInteresse = validaPontoInteresse(req.body);
      res.status(200).send(`Ponto de interesse aceito com sucesso`);
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
