import { NextResponse } from "next/server";
import db from "../../../../../database/init";

// Get product by ID
export async function GET(req, { params }) {
  const { id } = params;

  return new Promise((resolve) => {
    db.get("SELECT * FROM products WHERE id = ?", [id], (err, row) => {
      if (err) {
        resolve(NextResponse.json({ error: err.message }, { status: 500 }));
      } else if (row) {
        resolve(NextResponse.json(row));
      } else {
        resolve(
          NextResponse.json({ message: "Product not found" }, { status: 404 })
        );
      }
    });
  });
}

// Update product by ID
export async function PUT(req, { params }) {
  const { id } = params;
  const { image, title, price, oldPrice, rating, description } =
    await req.json();

  return new Promise((resolve) => {
    db.run(
      "UPDATE products SET image = ?, title = ?, price = ?, oldPrice = ?, rating = ?, description = ? WHERE id = ?",
      [image, title, price, oldPrice, rating, description, id],
      function (err) {
        if (err) {
          resolve(NextResponse.json({ error: err.message }, { status: 500 }));
        } else {
          resolve(
            NextResponse.json({
              updatedID: id,
              image,
              title,
              price,
              oldPrice,
              rating,
              description,
            })
          );
        }
      }
    );
  });
}

// Delete product by ID
export async function DELETE(req, { params }) {
  const { id } = params;

  return new Promise((resolve) => {
    db.run("DELETE FROM products WHERE id = ?", [id], function (err) {
      if (err) {
        resolve(NextResponse.json({ error: err.message }, { status: 500 }));
      } else {
        resolve(NextResponse.json({ deletedID: id }));
      }
    });
  });
}
