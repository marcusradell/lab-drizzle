import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import * as schema from "./schema";
import { createQueries } from "./queries";
import { DbClient } from "../../../db-client";

export const createRepository = (dbClient: DbClient) => {
  const db = drizzle(dbClient, { schema });

  return createQueries(db);
};
