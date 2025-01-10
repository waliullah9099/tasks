import { open } from "sqlite";
import sqlite3 from "sqlite3";

// Helper to open SQLite database
const openDB = async () => {
  return open({
    filename: "./products.sqlite",
    driver: sqlite3.Database,
  });
};

export default async function handler(req, res) {
  const db = await openDB();
  const { method } = req;
  const { id } = req.query;

  try {
    switch (method) {
      case "GET": // Get a single product
        if (id) {
          const product = await db.get("SELECT * FROM products WHERE id = ?", [
            id,
          ]);
          if (product) res.status(200).json(product);
          else res.status(404).json({ error: "Product not found" });
        } else {
          const products = await db.all("SELECT * FROM products");
          res.status(200).json(products);
        }
        break;

      case "POST": // Create a new product
        const { name, price, description, stock } = req.body;
        const result = await db.run(
          "INSERT INTO products (name, price, description, stock) VALUES (?, ?, ?, ?)",
          [name, price, description, stock]
        );
        res
          .status(201)
          .json({ id: result.lastID, name, price, description, stock });
        break;

      case "PUT": // Update a product
        if (!id)
          return res.status(400).json({ error: "Product ID is required" });
        const updateResult = await db.run(
          "UPDATE products SET name = ?, price = ?, description = ?, stock = ? WHERE id = ?",
          [
            req.body.name,
            req.body.price,
            req.body.description,
            req.body.stock,
            id,
          ]
        );
        res.status(200).json({ changes: updateResult.changes });
        break;

      case "DELETE": // Delete a product
        if (!id)
          return res.status(400).json({ error: "Product ID is required" });
        await db.run("DELETE FROM products WHERE id = ?", [id]);
        res.status(200).json({ message: "Product deleted" });
        break;

      default:
        res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    await db.close();
  }
}
