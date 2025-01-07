import ProductCard from "../ProductCard/ProductCard";

const NewArrival = () => {
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
        Top New Arrival
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
