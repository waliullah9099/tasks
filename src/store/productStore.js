"use client";

import { create } from "zustand";

const useProductStore = create((set) => ({
  products: [],

  // Fetch products
  fetchProducts: async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    set({ products: data });
  },

  // Add product
  addProduct: async (formData) => {
    await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    set((state) => ({
      products: [...state.products, formData],
    }));
  },

  // Edit product
  editProduct: async (formData) => {
    await fetch(`/api/products/${formData.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    set((state) => ({
      products: state.products.map((product) =>
        product.id === formData.id ? formData : product
      ),
    }));
  },

  // Delete product
  deleteProduct: async (id) => {
    await fetch(`/api/products/${id}`, { method: "DELETE" });
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    }));
  },
}));

export default useProductStore;
