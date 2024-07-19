import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";
import { createQueries } from "./queries";
import { DbClient } from "../../../app";

export const createRepository = (dbClient: DbClient) => {
  const db = drizzle(dbClient, { schema });

  return createQueries(db);
};
