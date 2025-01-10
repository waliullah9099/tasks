"use client";
import Link from "next/link";
import { DropdownItem } from "./DropdownItems";

const Navbar = () => {
  // const cartItems = useCartStore((state) => state.cartItems);
  const dropdownItems = [
    {
      href: "#",
      imgSrc: "assets/images/icons/sofa.svg",
      imgAlt: "Sofa",
      text: "Sofa",
    },
    {
      href: "#",
      imgSrc: "assets/images/icons/terrace.svg",
      imgAlt: "Living Room",
      text: "Living Room",
    },
    {
      href: "#",
      imgSrc: "assets/images/icons/bed.svg",
      imgAlt: "Bedroom",
      text: "Bedroom",
    },
    {
      href: "#",
      imgSrc: "assets/images/icons/office.svg",
      imgAlt: "Office",
      text: "Office",
    },
    {
      href: "#",
      imgSrc: "assets/images/icons/outdoor-cafe.svg",
      imgAlt: "Outdoor Cafe",
      text: "Outdoor Cafe",
    },
    {
      href: "#",
      imgSrc: "assets/images/icons/bed-2.svg",
      imgAlt: "Mattress",
      text: "Mattress",
    },
  ];
  return (
    <nav className="bg-gray-800">
      <div className="container flex">
        <div className="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden">
          <span className="text-white">
            <i className="fa-solid fa-bars"></i>
          </span>
          <span className="capitalize ml-2 text-white">All Categories</span>

          {/* Dropdown */}
          <div className="absolute left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible w-[300px] z-50">
            {dropdownItems.map((item, index) => (
              <DropdownItem
                key={index}
                href={item.href}
                imgSrc={item.imgSrc}
                imgAlt={item.imgAlt}
                text={item.text}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
          <div className="flex items-center space-x-6 capitalize">
            <Link
              href="/"
              className="text-gray-200 hover:text-white transition"
            >
              Home
            </Link>
            <Link
              href="/"
              className="text-gray-200 hover:text-white transition"
            >
              Shop
            </Link>
            <Link
              href="/"
              className="text-gray-200 hover:text-white transition"
            >
              About Us
            </Link>
            <Link
              href="/"
              className="text-gray-200 hover:text-white transition"
            >
              Contact Us
            </Link>
          </div>
          <Link
            href="/dashboard"
            className="text-gray-200 hover:text-white transition"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
