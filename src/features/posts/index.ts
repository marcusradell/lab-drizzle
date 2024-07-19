import { createRepository } from "./repository/index.js";

export const createPostsFeature = (dbClient: any) => {
  const repository = createRepository(dbClient);

  return { repository };
};
