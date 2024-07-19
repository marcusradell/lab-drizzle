import { DbClient } from "../../app";
import { createRepository } from "./repository";
import { createRouter } from "./router";
import { createService } from "./service";
import { GetUsers } from "./types";

export const createPostsFeature = (dbClient: DbClient, getUsers: GetUsers) => {
  const repository = createRepository(dbClient);

  const service = createService(repository, getUsers);
  const router = createRouter(service);

  return { service, router };
};
