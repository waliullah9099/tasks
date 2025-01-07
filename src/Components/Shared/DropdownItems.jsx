import Image from "next/image";
import Link from "next/link";



export const DropdownItem = ({
  href,
  imgSrc,
  imgAlt,
  text,
}) => (
  <Link
    href={href}
    className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
  >
    <Image
      src={imgSrc}
      alt={imgAlt}
      width={20}
      height={20}
      className="w-5 h-5 object-contain"
    />
    <span className="ml-6 text-gray-600 text-sm">{text}</span>
  </Link>
);
