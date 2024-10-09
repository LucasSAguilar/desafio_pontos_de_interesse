import { Request, Response } from "express";

class pontoInteresseController {
  public enviaHello(req: Request, res: Response) {
    res.send("Hello, Ponto Interesse");
  }

  public recebeDados(req: Request, res: Response) {
    res.send("Dados recebidos");
  }
}

export default pontoInteresseController;
