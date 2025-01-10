import Link from "next/link";
import { BiHome } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";

const DashboardLayout = ({ children }) => {
  const items = [
    <li key="item1">
      <Link href="/" className="flex items-center gap-1 text-xl">
        <BiHome className="text-xl" /> Home
      </Link>
    </li>,
    <li key="item2">
      <Link href="/dashboard" className="flex items-center gap-1 text-xl">
        <MdDashboard className="text-xl" /> Dashboard
      </Link>
    </li>,
  ];

  return (
    <>
      <div className="">
        {/* Sidebar, visible on medium screens and larger */}
        <aside className=" md:block hidden">
          <div className="flex flex-[2] bg-gray-200 h-screen p-4 pr-12 fixed">
            <ul className="flex flex-col space-y-3 text-lg font-medium text-secondary text-blue-500">
              {items}
            </ul>
          </div>
        </aside>

        {/* Main content, always takes full width */}
        <div className="md:pl-[175px]">{children}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
