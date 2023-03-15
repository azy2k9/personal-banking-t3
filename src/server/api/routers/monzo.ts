import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const monzoRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  fetchBalance: protectedProcedure.query(() => {
    return "here is your balance";
  }),
  fetchTransactions: protectedProcedure.query(() => {
    return "here are your transactions";
  }),
});
