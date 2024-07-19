import { DbClient } from "../../db-client";
import { createRepository } from "./repository";
import { createService } from "./service";

export const createUsersFeature = (dbClient: DbClient) => {
  const repository = createRepository(dbClient);

  const service = createService(repository);

  return { repository, service };
};
