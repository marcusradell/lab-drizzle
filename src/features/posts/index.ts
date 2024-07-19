import { DbClient } from "../../db-client.js";
import { createRepository } from "./repository";
import { createService } from "./service.js";
import { GetUsers } from "./types.js";

export const createPostsFeature = (dbClient: DbClient, getUsers: GetUsers) => {
  const repository = createRepository(dbClient);

  const service = createService(repository, getUsers);

  return { repository, service };
};
