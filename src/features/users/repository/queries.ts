import { asc, eq } from "drizzle-orm";
import { usersTable } from "./schema";
import { Db, Id, InsertUser } from "./types";

export const createQueries = (db: Db) => {
  async function getUserById(id: Id): Promise<
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

  const getUsers = async (page: number, pageSize: number) => {
    return db
      .select()
      .from(usersTable)
      .orderBy(asc(usersTable.id))
      .limit(pageSize)
      .offset((page - 1) * pageSize);
  };

  return { getUserById, createUser, getUsers };
};
