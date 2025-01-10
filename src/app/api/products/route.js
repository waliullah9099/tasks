import { NextResponse } from "next/server";
import db from "../../../../database/init";

// Get all products
export async function GET() {
  return new Promise((resolve) => {
    db.all("SELECT * FROM products ORDER BY addTime ASC", [], (err, rows) => {
      if (err) {
        resolve(NextResponse.json({ error: err.message }, { status: 500 }));
      } else {
        resolve(NextResponse.json(rows));
      }
    });
  });
}

// Create a new product
export async function POST(req) {
  const { image, title, price, oldPrice, rating, description } =
    await req.json();
  const addTime = new Date().toISOString();

  return new Promise((resolve) => {
    db.run(
      "INSERT INTO products (image, title, price, oldPrice, rating, description, addTime) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [image, title, price, oldPrice, rating, description, addTime],
      function (err) {
        if (err) {
          resolve(NextResponse.json({ error: err.message }, { status: 500 }));
        } else {
          resolve(
            NextResponse.json(
              {
                id: this.lastID,
                image,
                title,
                price,
                oldPrice,
                rating,
                description,
                addTime,
              },
              { status: 201 }
            )
          );
        }
      }
    );
  });
}
