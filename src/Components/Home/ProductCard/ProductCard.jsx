import Image from "next/image";
import Link from "next/link";
import ProductRating from "./ProductRating";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow rounded overflow-hidden group">
      <div className="relative">
        <Image
          src={product?.image}
          alt={product?.title}
          width={430}
          height={350}
          className="w-full"
        />
        <div
          className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
            justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
        >
          <Link
            href="#"
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="view product"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
          <Link
            href="#"
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="add to wishlist"
          >
            <i className="fa-solid fa-heart"></i>
          </Link>
        </div>
      </div>
      <div className="pt-4 pb-3 px-4">
        <Link href="#">
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
            {product?.title}
          </h4>
        </Link>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-semibold">{product?.price}</p>
          <p className="text-sm text-gray-400 line-through">
            {product?.oldPrice}
          </p>
        </div>
        <div className="flex items-center">
          {/* <div className="flex gap-1 text-sm text-yellow-400">
            {[...Array(product?.rating)].map((_, i) => (
              <span key={i}>
                <i className="fa-solid fa-star"></i>
              </span>
            ))}
          </div> */}
          <ProductRating rating={product?.rating} />
          <div className="text-xs text-gray-500 ml-3">({product?.reviews})</div>
        </div>
      </div>
      <Link
        href="#"
        className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
      >
        Add to cart
      </Link>
    </div>
  );
};

export default ProductCard;
