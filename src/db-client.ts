import postgres, { Sql } from "postgres";

export type DbClient = Sql;

export const createDbClient = () => {
  const dbUrl = process.env.DB_URL;

  if (!dbUrl) {
    throw new Error("Missing DB_URL.");
  }

  return postgres(dbUrl);
};
