import ProductCard from "../ProductCard/ProductCard";

const TrendingProducts = () => {
  const products = [
    {
      image: "/assets/images/products/product1.jpg",
      title: "Guyer Chair",
      price: "$45.00",
      oldPrice: "$55.90",
      rating: 5,
      reviews: 150,
    },
    {
      image: "/assets/images/products/product4.jpg",
      title: "Bed King Size",
      price: "$45.00",
      oldPrice: "$55.90",
      rating: 5,
      reviews: 150,
    },
    {
      image: "/assets/images/products/product2.jpg",
      title: "Couple Sofa",
      price: "$45.00",
      oldPrice: "$55.90",
      rating: 5,
      reviews: 150,
    },
    {
      image: "/assets/images/products/product3.jpg",
      title: "Mattrass X",
      price: "$45.00",
      oldPrice: "$55.90",
      rating: 5,
      reviews: 150,
    },
  ];
  return (
    <div className="container pb-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        TRENDING PRODUCTS
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;

// const ProductCard = ({ product }) => (
//     <div className="bg-white shadow rounded overflow-hidden group">
//       <div className="relative">
//         <img src={product.image} alt={product.name} className="w-full" />
//         <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
//           <a
//             href="#"
//             className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
//             title="view product"
//           >
//             <i className="fa-solid fa-magnifying-glass"></i>
//           </a>
//           <a
//             href="#"
//             className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
//             title="add to wishlist"
//           >
//             <i className="fa-solid fa-heart"></i>
//           </a>
//         </div>
//       </div>
//       <div className="pt-4 pb-3 px-4">
//         <a href="#">
//           <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
//             {product.name}
//           </h4>
//         </a>
//         <div className="flex items-baseline mb-1 space-x-2">
//           <p className="text-xl text-primary font-semibold">{product.price}</p>
//           <p className="text-sm text-gray-400 line-through">{product.oldPrice}</p>
//         </div>
//         <div className="flex items-center">
//           <div className="flex gap-1 text-sm text-yellow-400">
//             {Array(product.rating)
//               .fill()
//               .map((_, i) => (
//                 <span key={i}>
//                   <i className="fa-solid fa-star"></i>
//                 </span>
//               ))}
//           </div>
//           <div className="text-xs text-gray-500 ml-3">({product.reviews})</div>
//         </div>
//       </div>
//       <a
//         href="#"
//         className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
//       >
//         Add to cart
//       </a>
//     </div>
//   );
