import { createTRPCRouter } from "~/server/api/trpc";
import { monzoRouter } from "~/server/api/routers/monzo";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  monzo: monzoRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
