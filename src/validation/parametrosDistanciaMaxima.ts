import z from "zod";

const distanciaMaximaSchema = z.object({
  posX: z.number().int().min(0),
  posY: z.number().int().min(0),
  dmax: z.number().int().min(0),
});

function validaDistanciaMaxima(data: unknown) {
  try {
    const dadosParametrosDistanciaMaxima = distanciaMaximaSchema.parse(data);
    return dadosParametrosDistanciaMaxima;
  } catch (error) {
    if (error instanceof z.ZodError) {
      const mensagemErro = error.errors[0].message;
      throw new Error(`Erro: ${mensagemErro}`);
    }
    throw new Error(`Erro desconhecido ao validar distancia máxima`);
  }
}

export default validaDistanciaMaxima;
