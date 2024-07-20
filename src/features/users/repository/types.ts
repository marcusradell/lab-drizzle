import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import * as schema from "./schema";
import { createRepository } from ".";

export type Db = PostgresJsDatabase<typeof schema>;

export type InsertUser = Omit<
  typeof schema.usersTable.$inferInsert,
  "serialId"
>;
export type SelectUser = typeof schema.usersTable.$inferSelect;
export type UserId = SelectUser["id"];

export type Repository = ReturnType<typeof createRepository>;
