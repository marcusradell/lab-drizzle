import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import * as schema from "./schema";

export type Db = PostgresJsDatabase<typeof schema>;

export type InsertUser = typeof schema.usersTable.$inferInsert;
export type SelectUser = typeof schema.usersTable.$inferSelect;
