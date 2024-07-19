import { createRepository } from "./repository";

export const createUsersFeature = (dbClient: any) => {
  const repository = createRepository(dbClient);

  return { repository };
};
