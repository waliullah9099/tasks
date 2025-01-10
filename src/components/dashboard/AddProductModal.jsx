import { FaXmark } from "react-icons/fa6";
import AddProductForm from "./AddProductForm";

const AddProductModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-md w-full max-w-md p-6">
        <div className="flex items-center justify-between border-b pb-3">
          <h2 className="text-lg font-semibold">Add New Product</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            <FaXmark className="text-2xl font-semibold border p-1.5 rounded-full size-11 text-red-500 shadow-lg" />
          </button>
        </div>
        <div className="mt-4">
          <AddProductForm
            onSubmit={(formData) => {
              onSubmit(formData);
              onClose();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
