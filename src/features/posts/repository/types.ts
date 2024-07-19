import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import * as schema from "./schema";
import { createRepository } from ".";

export type Db = PostgresJsDatabase<typeof schema>;

export type InsertPost = typeof schema.postsTable.$inferInsert;
export type SelectPost = typeof schema.postsTable.$inferSelect;
export type Id = SelectPost["id"];

export type Repository = ReturnType<typeof createRepository>;
