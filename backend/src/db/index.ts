import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema.js";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
  uri: process.env.DATABASE_URL!,
});

export const db = drizzle(pool, {
  schema,
  mode: "default", // ✅ Required in newer versions
});
