import { Request, Response } from "express";

class pontoInteresseController {
  public enviaHello(req: Request, res: Response) {
    res.send("Hello, Ponto Interesse");
  }
}

export default pontoInteresseController;
