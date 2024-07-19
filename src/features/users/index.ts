import { DbClient } from "../../db-client";
import { createRepository } from "./repository";

export const createUsersFeature = (dbClient: DbClient) => {
  const repository = createRepository(dbClient);

  return { repository };
};
