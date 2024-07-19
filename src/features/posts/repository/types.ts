import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import * as schema from "./schema";

export type Db = PostgresJsDatabase<typeof schema>;

export type InsertPost = typeof schema.postsTable.$inferInsert;
export type SelectPost = typeof schema.postsTable.$inferSelect;
