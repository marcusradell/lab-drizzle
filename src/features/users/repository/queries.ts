import { asc, eq } from "drizzle-orm";
import { usersTable } from "./schema";
import { Db, UserId, InsertUser } from "./types";

export const createQueries = (db: Db) => {
  async function getUserById(id: UserId): Promise<
    Array<{
      id: string;
      name: string;
      age: number;
      email: string;
    }>
  > {
    return db.select().from(usersTable).where(eq(usersTable.id, id));
  }

  async function addUser(data: InsertUser) {
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

  return { getUserById, addUser, getUsers };
};
