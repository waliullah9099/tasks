import ProductCard from "../../UI/ProductCard/ProductCard";

const NewArrival = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/api/products`, {
    next: {
      revalidate: 30,
    },
  });

  const products = await res.json();
  // console.log(products);

  return (
    <div className="container pb-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        Top New Arrival
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products?.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
