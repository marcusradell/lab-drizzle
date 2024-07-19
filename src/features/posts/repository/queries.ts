import { asc, between, count, eq, getTableColumns, sql } from "drizzle-orm";
import { postsTable } from "./schema";

// TODO: reimplement
// export async function getPostsCount(
//   page = 1,
//   pageSize = 5
// ): Promise<
//   Array<{
//     postsCount: number;
//     id: number;
//     name: string;
//     age: number;
//     email: string;
//   }>
// > {
//   return db
//     .select({
//       ...getTableColumns(usersTable),
//       postsCount: count(postsTable.id),
//     })
//     .from(usersTable)
//     .leftJoin(postsTable, eq(usersTable.id, postsTable.userId))
//     .groupBy(usersTable.id)
//     .orderBy(asc(usersTable.id))
//     .limit(pageSize)
//     .offset((page - 1) * pageSize);
// }

export const createQueries = (db: any) => {
  async function getPostsForLast24Hours(
    page = 1,
    pageSize = 5
  ): Promise<
    Array<{
      id: number;
      title: string;
    }>
  > {
    return db
      .select({
        id: postsTable.id,
        title: postsTable.title,
      })
      .from(postsTable)
      .where(
        between(postsTable.createdAt, sql`now() - interval '1 day'`, sql`now()`)
      )
      .orderBy(asc(postsTable.title), asc(postsTable.id))
      .limit(pageSize)
      .offset((page - 1) * pageSize);
  }

  return { getPostsForLast24Hours };
};
