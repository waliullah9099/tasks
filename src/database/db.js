import { open } from "sqlite";
import sqlite3 from "sqlite3";

let db = null;

async function openDb() {
  if (!db) {
    db = await open({
      filename: "./mydb.sqlite",
      driver: sqlite3.Database,
    });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS products (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          image TEXT,
          title TEXT,
          price REAL,
          oldPrice REAL,
          rating INTEGER,
          reviews INTEGER,
          description TEXT,
          addedAt DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `);
  }
  return db;
}

export { openDb };
