import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleStrapiLogin = () => {
    window.open("http://localhost:1337/admin/auth/login", "_blank"); 
  };

  return (
    <>
      <nav className="bg-gray-200 border-y border-gray-400 flex flex-col lg:block items-end top-0 w-full z-40 sticky">
        {/* Mobile Header */}
        <div className="flex lg:hidden justify-between sm:justify-end w-full">
          <div className="flex items-center sm:hidden !px-3 lg:!px-6 text-gray-900 text-sm">
            <p className="text-sm font-medium text-gray-700">{formattedDate}</p>
          </div>
          <div
            className="cursor-pointer !px-3 lg:!px-6 !py-2"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="size-6 text-gray-900 transition-all duration-300 ease-in-out"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="size-6 text-gray-900 transition-all duration-300 ease-in-out"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </div>
        </div>

        {/* Main Navigation */}
        <ul
          className={`lg:flex justify-between text-sm text-gray-700 !px-3 lg:!px-6 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "block opacity-100" : "hidden opacity-0 lg:opacity-100"
          }`}
        >
          {[
            { path: "/", label: "Home" },
            { path: "/national", label: "National" },
            { path: "/international", label: "International" },
            { path: "/technology", label: "Technology" },
            { path: "/business", label: "Business" },
            { path: "/education", label: "Education" },
            { path: "/lifestyle", label: "Lifestyle" },
            { path: "/entertainment", label: "Entertainment" },
            { path: "/sports", label: "Sports" },
          ].map(({ path, label }) => (
            <li key={path} className="text-right !mb-2 lg:!mb-0 lg:!py-2">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-gray-900 font-bold"
                      : "hover:text-gray-900 hover:font-medium"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}

          {/* More items for small screens (No dropdown) */}
          <div className="lg:hidden !pb-2">
            {[
              { path: "/aboutus", label: "About" },
              { path: "/contactus", label: "Contact" },
              { path: "/currentissue", label: "Current Issue" },
              { path: "/archive", label: "Archive" },
            ].map(({ path, label }) => (
              <li key={path} className="text-right !mb-2">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-gray-700 font-bold"
                        : "hover:text-gray-900 hover:font-medium"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="text-right !mb-2">
              <button
                onClick={handleStrapiLogin}
                className="hover:text-gray-900 hover:font-medium cursor-pointer"
              >
                Login
              </button>
            </li>
          </div>

          {/* More Dropdown (Only for larger screens) */}
          <li
            className="relative text-right cursor-pointer hidden lg:block !py-4 lg:!py-2"
            onMouseEnter={() => setIsMoreOpen(true)}
            onMouseLeave={() => setIsMoreOpen(false)}
          >
            <button className="hover:text-gray-700 flex items-center">
              More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <ul
              className={`absolute right-0 !mt-2 w-48 bg-gray-300 text-gray-700 border border-gray-500 shadow-lg z-50 rounded-md transition-all duration-300 ease-in-out ${
                isMoreOpen
                  ? "block opacity-100 scale-100"
                  : "hidden opacity-0 scale-95"
              }`}
            >
              {[
                { path: "/aboutus", label: "About" },
                { path: "/contactus", label: "Contact" },
                { path: "/currentissue", label: "Current Issue" },
                { path: "/archive", label: "Archive" },
              ].map(({ path, label }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    className="block !px-4 !py-2 hover:text-gray-900 hover:font-medium"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
              <li>
                <button
                  onClick={handleStrapiLogin}
                  className="block w-full text-right !px-4 !py-2 hover:text-gray-900 hover:font-medium cursor-pointer"
                >
                  Login
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
