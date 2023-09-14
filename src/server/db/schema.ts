// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  sqliteTableCreator,
  uniqueIndex,
  int,
  text,
} from "drizzle-orm/sqlite-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const mysqlTable = sqliteTableCreator((name) => `bunsnext_${name}`);

export const something = mysqlTable(
  "something",
  {
    id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    name: text("name", { length: 256 }),
  },
  (something) => ({
    nameIndex: uniqueIndex("name_idx").on(something.name),
  })
);
