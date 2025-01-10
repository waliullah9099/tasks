import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ image, label, link }) => {
  return (
    <div className="relative rounded-sm overflow-hidden group">
      <Image
        src={image}
        alt={label}
        width={430}
        height={350}
        className="w-full"
      />
      <Link
        href={link}
        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition-all duration-500"
      >
        {label}
      </Link>
    </div>
  );
};

export default CategoryCard;
