import { Context } from "./context";

export const resolvers = {
  Query: {
    links: async (_parent, _args, ctx: Context) =>
      await ctx.prisma.link.findMany(),
  },
};
