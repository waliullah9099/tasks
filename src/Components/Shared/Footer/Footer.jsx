import Image from "next/image";

const Footer = () => {
  const fullYear = new Date().getFullYear();
  return (
    <>
      <div className="bg-gray-800 py-4">
        <div className="container flex items-center justify-between">
          <p className="text-white text-lg">
            &copy; {fullYear}
            <span className="">
              {" "}
              Job<span className="text-primary">Task</span>{" "}
            </span>
            - All Rights Reserved
          </p>

          <div>
            <Image
              width={210}
              height={70}
              src="/assets/images/methods.png"
              alt="methods"
              className="h-5"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
