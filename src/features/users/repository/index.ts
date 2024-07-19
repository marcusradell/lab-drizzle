import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";
import { createQueries } from "./queries";

export const createRepository = (dbClient: any) => {
  const db = drizzle(dbClient, { schema });

  return createQueries(db);
};
