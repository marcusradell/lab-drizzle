import { DbClient } from "../../db-client.js";
import { createRepository } from "./repository/index.js";

export const createPostsFeature = (dbClient: DbClient) => {
  const repository = createRepository(dbClient);

  return { repository };
};
