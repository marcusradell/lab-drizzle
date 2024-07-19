import { DbClient } from "../../db-client.js";
import { createRepository } from "./repository";
import { createService } from "./service.js";

export const createPostsFeature = (dbClient: DbClient) => {
  const repository = createRepository(dbClient);

  const service = createService(repository);

  return { repository, service };
};
