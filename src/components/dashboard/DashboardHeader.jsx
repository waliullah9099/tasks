import { FaPlus } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const DashboardHeader = ({ productCount, onAddProduct }) => {
  return (
    <header className="bg-white shadow mb-6">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800 hidden md:block">
          Product Dashboard
        </h1>
        <div className="flex items-center space-x-4">
          <div className="bg-blue-100 text-blue-800 py-2 px-4 rounded-full flex items-center">
            <HiOutlineShoppingBag className="w-5 h-5 mr-2" />
            <span className="font-semibold">{productCount} Products</span>
          </div>
          <button
            onClick={onAddProduct}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700"
          >
            <FaPlus className="w-5 h-5 mr-2" /> Add Product
          </button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
