import { NextResponse } from "next/server";
import db from "../../database/init";
import { DELETE, GET, PUT } from "../../src/app/api/products/[id]/route";

jest.mock("../../database/init");
jest.mock("next/server", () => ({
  NextResponse: {
    json: jest.fn(),
  },
}));

describe("Products API by ID", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("GET /products/:id", () => {
    it("should return the product by ID", async () => {
      const mockParams = { params: { id: 1 } };
      const mockProduct = {
        id: 1,
        title: "Test Product",
        price: 100,
        description: "Test Description",
      };

      db.get.mockImplementation((query, params, callback) => {
        callback(null, mockProduct);
      });

      await GET(null, mockParams);

      expect(db.get).toHaveBeenCalledWith(
        "SELECT * FROM products WHERE id = ?",
        [1],
        expect.any(Function)
      );
      expect(NextResponse.json).toHaveBeenCalledWith(mockProduct);
    });

    it("should return 404 if product is not found", async () => {
      const mockParams = { params: { id: 2 } };

      db.get.mockImplementation((query, params, callback) => {
        callback(null, null);
      });

      await GET(null, mockParams);

      expect(NextResponse.json).toHaveBeenCalledWith(
        { message: "Product not found" },
        { status: 404 }
      );
    });

    it("should return 500 on database error", async () => {
      const mockParams = { params: { id: 3 } };
      const mockError = new Error("Database error");

      db.get.mockImplementation((query, params, callback) => {
        callback(mockError);
      });

      await GET(null, mockParams);

      expect(NextResponse.json).toHaveBeenCalledWith(
        { error: mockError.message },
        { status: 500 }
      );
    });
  });

  describe("PUT /products/:id", () => {
    it("should update the product by ID", async () => {
      const mockParams = { params: { id: 1 } };
      const mockBody = {
        image: "image.jpg",
        title: "Updated Product",
        price: 150,
        oldPrice: 200,
        rating: 4.5,
        description: "Updated description",
      };

      db.run.mockImplementation((query, params, callback) => {
        callback(null);
      });

      await PUT({ json: () => mockBody }, mockParams);

      expect(db.run).toHaveBeenCalledWith(
        "UPDATE products SET image = ?, title = ?, price = ?, oldPrice = ?, rating = ?, description = ? WHERE id = ?",
        [
          mockBody.image,
          mockBody.title,
          mockBody.price,
          mockBody.oldPrice,
          mockBody.rating,
          mockBody.description,
          1,
        ],
        expect.any(Function)
      );
      expect(NextResponse.json).toHaveBeenCalledWith({
        updatedID: 1,
        ...mockBody,
      });
    });

    it("should return 500 on database error during update", async () => {
      const mockParams = { params: { id: 1 } };
      const mockBody = {
        image: "image.jpg",
        title: "Updated Product",
        price: 150,
        oldPrice: 200,
        rating: 4.5,
        description: "Updated description",
      };

      const mockError = new Error("Database error");

      db.run.mockImplementation((query, params, callback) => {
        callback(mockError);
      });

      await PUT({ json: () => mockBody }, mockParams);

      expect(NextResponse.json).toHaveBeenCalledWith(
        { error: mockError.message },
        { status: 500 }
      );
    });
  });

  describe("DELETE /products/:id", () => {
    it("should delete the product by ID", async () => {
      const mockParams = { params: { id: 1 } };

      db.run.mockImplementation((query, params, callback) => {
        callback(null);
      });

      await DELETE(null, mockParams);

      expect(db.run).toHaveBeenCalledWith(
        "DELETE FROM products WHERE id = ?",
        [1],
        expect.any(Function)
      );
      expect(NextResponse.json).toHaveBeenCalledWith({ deletedID: 1 });
    });

    it("should return 500 on database error during deletion", async () => {
      const mockParams = { params: { id: 1 } };
      const mockError = new Error("Database error");

      db.run.mockImplementation((query, params, callback) => {
        callback(mockError);
      });

      await DELETE(null, mockParams);

      expect(NextResponse.json).toHaveBeenCalledWith(
        { error: mockError.message },
        { status: 500 }
      );
    });
  });
});
