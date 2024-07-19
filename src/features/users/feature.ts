import { DbClient } from "../../app";
import { createRepository } from "./repository";
import { createRouter } from "./router";
import { createService } from "./service/service";

export const createUsersFeature = (dbClient: DbClient) => {
  const repository = createRepository(dbClient);

  const service = createService(repository);
  const router = createRouter(service);

  return { service, router };
};
