import request from "supertest";
import db from "../database/init";
import { GET, POST } from "../src/app/api/products/route";

jest.mock("../../../../database/init", () => {
  const sqlite3 = require("sqlite3").verbose();
  const mockDb = new sqlite3.Database(":memory:");

  // Initialize a mock "products" table
  mockDb.serialize(() => {
    mockDb.run(
      "CREATE TABLE products (id INTEGER PRIMARY KEY, image TEXT, title TEXT, price REAL, oldPrice REAL, rating REAL, description TEXT, addTime TEXT)"
    );
  });

  return mockDb;
});

describe("Products API", () => {
  afterAll(() => {
    db.close();
  });

  describe("GET /products", () => {
    it("should return all products", async () => {
      // Insert mock data
      await new Promise((resolve) => {
        db.run(
          "INSERT INTO products (image, title, price, oldPrice, rating, description, addTime) VALUES (?, ?, ?, ?, ?, ?, ?)",
          [
            "image1.jpg",
            "Product 1",
            100,
            120,
            4.5,
            "Description 1",
            new Date().toISOString(),
          ],
          resolve
        );
      });

      // Call the GET method
      const res = await request(GET).get("/products");
      expect(res.status).toBe(200);
      expect(res.body).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            title: "Product 1",
          }),
        ])
      );
    });
  });

  describe("POST /products", () => {
    it("should create a new product", async () => {
      const newProduct = {
        image: "image2.jpg",
        title: "Product 2",
        price: 200,
        oldPrice: 250,
        rating: 5.0,
        description: "Description 2",
      };

      // Call the POST method
      const res = await request(POST).post("/products").send(newProduct);

      expect(res.status).toBe(201);
      expect(res.body).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          ...newProduct,
          addTime: expect.any(String),
        })
      );

      // Verify the product was added to the database
      const dbCheck = await new Promise((resolve) => {
        db.get(
          "SELECT * FROM products WHERE id = ?",
          [res.body.id],
          (err, row) => {
            resolve(row);
          }
        );
      });

      expect(dbCheck).toEqual(expect.objectContaining(newProduct));
    });

    it("should return an error if required fields are missing", async () => {
      const res = await request(POST).post("/products").send({});

      expect(res.status).toBe(500);
      expect(res.body).toHaveProperty("error");
    });
  });
});
