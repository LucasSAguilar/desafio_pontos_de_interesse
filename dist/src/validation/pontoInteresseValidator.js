import z from "zod";
const pontoInteresseSchema = z.object({
    nome: z
        .string({ message: "O nome deve ser um texto" })
        .min(1, { message: "O nome deve ter no mínimo 1 caractere" })
        .max(255, { message: "O nome deve ter no máximo 255 caracteres" }),
    posX: z
        .number({ message: "As posições devem ser números inteiros" })
        .min(0)
        .int(),
    posY: z
        .number({ message: "As posições devem ser números inteiros" })
        .min(0)
        .int(),
});
function validaPontoInteresse(dadoRecebido) {
    try {
        const pontoInteresse = pontoInteresseSchema.parse(dadoRecebido);
        return pontoInteresse;
    }
    catch (error) {
        if (error instanceof z.ZodError) {
            const mensagemErro = error.errors[0].message;
            throw new Error(`Erro: ${mensagemErro}`);
        }
        throw new Error(`Erro desconhecido ao validar o ponto de interesse.`);
    }
}
export default validaPontoInteresse;
