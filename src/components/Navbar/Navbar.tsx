import { useSelector } from "react-redux";
import { Link } from "react-router";

export const Navbar = () => {
  const state = useSelector((state) => state);

  function foo() {
    console.log("state", state);
  }

  return (
    <nav className="bg-white shadow-sm section-padding sticky top-0 z-50">
      {/* <div className="px-4 sm:px-6 lg:px-8"> */}
      <div className="flex justify-between h-16">
        <div className="flex-shrink-0 flex items-center">
          <h1 className="text-xl font-bold text-gray-800">NGOFlow</h1>
        </div>
        <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-1 md:space-x-8">
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
          >
            NGOs
          </a>
          {/* <a
            href="#"
            className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
          >
            Campaigns
          </a> */}
          <button onClick={foo}>Click</button>
          <Link
            to="/login"
            className="border border-blue-600 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md text-sm font-medium"
          >
            Sign Up
          </Link>
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
};
