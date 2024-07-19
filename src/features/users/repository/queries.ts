import { eq } from "drizzle-orm";
import { usersTable } from "./schema";
import { Db, InsertUser, SelectUser } from "./types";

export const createQueries = (db: Db) => {
  async function getUserById(id: SelectUser["id"]): Promise<
    Array<{
      id: number;
      name: string;
      age: number;
      email: string;
    }>
  > {
    return db.select().from(usersTable).where(eq(usersTable.id, id));
  }

  async function createUser(data: InsertUser) {
    await db.insert(usersTable).values(data);
  }

  return { getUserById, createUser };
};
