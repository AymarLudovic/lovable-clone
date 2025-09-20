import { z } from "zod";
import { createTRPCRouter } from "../init";

export const aiRouter = createTRPCRouter({
  createAI: {
    input: z.object({ text: z.string() }),
    resolve({ input }) {
      // Ici tu peux mettre ton appel à l'IA
      return { result: `Réponse générée pour "${input.text}"` };
    },
  },
});
