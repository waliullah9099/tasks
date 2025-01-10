import CategoryCard from "./CategoryCard";

const categories = [
  {
    image: "/assets/images/category/category-1.jpg",
    label: "Bedroom",
    link: "/",
  },
  {
    image: "/assets/images/category/category-2.jpg",
    label: "Mattress",
    link: "/",
  },
  {
    image: "/assets/images/category/category-3.jpg",
    label: "Outdoor",
    link: "/",
  },
  {
    image: "/assets/images/category/category-4.jpg",
    label: "Sofa",
    link: "/",
  },
  {
    image: "/assets/images/category/category-5.jpg",
    label: "Living Room",
    link: "/",
  },
  {
    image: "/assets/images/category/category-6.jpg",
    label: "Kitchen",
    link: "/",
  },
];

const Categories = () => {
  return (
    <div className="container py-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        Shop by Category
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            image={category.image}
            label={category.label}
            link={category.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
