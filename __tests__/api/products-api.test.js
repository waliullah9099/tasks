import { NextResponse } from "next/server";
import db from "../../database/init";
import { GET, POST } from "../../src/app/api/products/route";

jest.mock("next/server", () => {
  return {
    NextResponse: {
      json: jest.fn((data, options) => ({
        data,
        status: options?.status || 200,
      })),
    },
  };
});

jest.mock("../../database/init", () => {
  return {
    all: jest.fn(),
    run: jest.fn(),
  };
});

describe("Products API", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("GET /products", () => {
    it("should return all products", async () => {
      const mockRows = [
        { id: 1, title: "Product 1", price: 100 },
        { id: 2, title: "Product 2", price: 200 },
      ];
      db.all.mockImplementation((query, params, callback) => {
        callback(null, mockRows);
      });

      const response = await GET();
      expect(NextResponse.json).toHaveBeenCalledWith(mockRows);
    });

    it("should handle database errors", async () => {
      const mockError = new Error("Database error");
      db.all.mockImplementation((query, params, callback) => {
        callback(mockError, null);
      });

      const response = await GET();
      expect(NextResponse.json).toHaveBeenCalledWith(
        { error: mockError.message },
        { status: 500 }
      );
    });
  });

  describe("POST /products", () => {
    it("should create a new product", async () => {
      const mockRequest = {
        json: async () => ({
          image: "image.jpg",
          title: "New Product",
          price: 150,
          oldPrice: 200,
          rating: 4.5,
          description: "A new product description",
        }),
      };

      // Mock `db.run` to simulate successful insertion
      db.run.mockImplementation((query, params, callback) => {
        callback.call({ lastID: 1 }, null); // Simulate `this.lastID = 1`
      });

      const response = await POST(mockRequest);

      expect(NextResponse.json).toHaveBeenCalledWith(
        expect.objectContaining({
          id: 1,
          image: "image.jpg",
          title: "New Product",
          price: 150,
          oldPrice: 200,
          rating: 4.5,
          description: "A new product description",
          addTime: expect.any(String),
        }),
        { status: 201 }
      );
    });

    it("should handle database errors", async () => {
      const mockRequest = {
        json: async () => ({
          image: "image.jpg",
          title: "New Product",
          price: 150,
          oldPrice: 200,
          rating: 4.5,
          description: "A new product description",
        }),
      };

      const mockError = new Error("Database error");
      db.run.mockImplementation((query, params, callback) => {
        callback(mockError);
      });

      const response = await POST(mockRequest);

      expect(NextResponse.json).toHaveBeenCalledWith(
        { error: mockError.message },
        { status: 500 }
      );
    });
  });
});
