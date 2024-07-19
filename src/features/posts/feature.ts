import { DbClient } from "../../db-client";
import { createRepository } from "./repository";
import { createService } from "./service";
import { GetUsers } from "./types";

export const createPostsFeature = (dbClient: DbClient, getUsers: GetUsers) => {
  const repository = createRepository(dbClient);

  const service = createService(repository, getUsers);

  return { service };
};
