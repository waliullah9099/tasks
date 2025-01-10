"use client";

import AddProductModal from "@/components/dashboard/AddProductModal";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import EditProductModal from "@/components/dashboard/EditProductModal";
import useProductStore from "@/store/productStore";
import Image from "next/image";
import { useEffect, useReducer } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const initialState = {
  selectedProduct: null,
  isEditModalOpen: false,
  isAddProductModalOpen: false,
};

// reducers
const reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_ADD_MODAL":
      return { ...state, isAddProductModalOpen: true };
    case "CLOSE_ADD_MODAL":
      return { ...state, isAddProductModalOpen: false };
    case "OPEN_EDIT_MODAL":
      return {
        ...state,
        isEditModalOpen: true,
        selectedProduct: action.payload,
      };
    case "CLOSE_EDIT_MODAL":
      return { ...state, isEditModalOpen: false, selectedProduct: null };
    default:
      return state;
  }
};

const Dashboard = () => {
  const { products, fetchProducts, addProduct, editProduct, deleteProduct } =
    useProductStore(); // Zustand store

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Handle delete action
  const handleDelete = async (id) => {
    const confirmed = confirm("Are you sure you want to delete this product?");
    if (confirmed) {
      await deleteProduct(id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardHeader
        productCount={products.length}
        onAddProduct={() => dispatch({ type: "OPEN_ADD_MODAL" })}
      />
      <div className="p-6 md:px-12 bg-gray-100 min-h-screen mx-auto">
        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-white shadow-md rounded-lg">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="px-4 py-2 text-left">Image</th>
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2 text-left">Rating</th>
                <th className="px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((item) => (
                <tr key={item.id} className="border-b mb-1.5 border-gray-200">
                  <td className="px-4 py-2">
                    <Image
                      width={58}
                      height={48}
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-12 object-cover rounded-md"
                    />
                  </td>
                  <td className="px-4 py-2">{item.title}</td>
                  <td className="px-4 py-2">${item.price}</td>
                  <td className="px-4 py-2">{item.rating}</td>
                  <td className="px-4 py-2 text-center flex justify-center items-center space-x-4">
                    <button
                      onClick={() =>
                        dispatch({ type: "OPEN_EDIT_MODAL", payload: item })
                      }
                      className="text-blue-500 hover:text-blue-700 text-[22px]"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-500 hover:text-red-700 text-xl"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Modals */}
      <AddProductModal
        isOpen={state.isAddProductModalOpen}
        onClose={() => dispatch({ type: "CLOSE_ADD_MODAL" })}
        onSubmit={addProduct}
      />
      <EditProductModal
        isOpen={state.isEditModalOpen}
        onClose={() => dispatch({ type: "CLOSE_EDIT_MODAL" })}
        onSubmit={editProduct}
        product={state.selectedProduct}
      />
    </div>
  );
};

export default Dashboard;
