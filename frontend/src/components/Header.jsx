import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../context/useAuth";

const Header = () => {
  const [formattedDate, setFormattedDate] = useState("");
  const { isLoggedIn } = useAuth();

  // Function to update the date
  const updateDate = () => {
    const today = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    setFormattedDate(today);
  };

  useEffect(() => {
    updateDate();

    // Update date at midnight
    const now = new Date();
    const timeUntilMidnight =
      new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0) -
      now;

    const midnightTimeout = setTimeout(() => {
      updateDate();
      setInterval(updateDate, 24 * 60 * 60 * 1000);
    }, timeUntilMidnight);

    return () => clearTimeout(midnightTimeout);
  }, []);

  return (
    <header className="block sm:flex justify-center sm:justify-between !px-3 lg:!px-6 !py-4">
      {/* Left Logo - Hidden on Small Screens */}
      <div className="hidden lg:flex items-center w-1/5">
        <img
          className="w-40 h-auto"
          src="../../logoo.png"
          alt="bvp-logo"
          loading="lazy"
        />
      </div>

      {/* Center Section (Logo + Date & Sign-in for Small Screens) */}
      <div className="flex flex-col items-center sm:flex-row sm:justify-between w-full sm:w-1/2 lg:w-2/5">
        <div className="flex justify-center w-full sm:w-auto">
          <img
            src="../../logo.png"
            alt="bharati-times-logo"
            loading="lazy"
            className="h-auto w-auto max-w-full object-contain mx-auto"
          />
        </div>

        {/* Date & Sign In/My Account Button (Stacked on Small Screens) */}
        <div className="flex justify-end sm:hidden items-center w-full !mt-2">
          {isLoggedIn ? (
            <Link
              to="/account"
              className="!mt-1 !py-[0.35rem] !px-[0.5rem] bg-blue-800 text-white text-[0.75rem] sm:text-sm font-medium rounded-sm hover:bg-gray-800"
            >
              My Account
            </Link>
          ) : (
            <Link
              to="/login"
              className="!mt-1 !py-[0.35rem] !px-[0.5rem] bg-blue-800 text-white text-[0.75rem] sm:text-sm font-medium rounded-sm hover:bg-gray-800"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>

      {/* Right Section - Only Visible on `sm` and Larger */}
      <div className="hidden sm:flex sm:flex-col justify-center items-end gap-2 sm:w-1/2 lg:w-1/5">
        <p className="text-sm font-medium text-gray-700">{formattedDate}</p>
        {isLoggedIn ? (
          <Link
            to="/account"
            className="!py-[0.35rem] !px-[0.5rem] bg-blue-800 text-white text-sm font-medium rounded-sm hover:bg-gray-800"
          >
            My Account
          </Link>
        ) : (
          <Link
            to="/login"
            className="!py-[0.35rem] !px-[0.5rem] bg-blue-800 text-white text-sm font-medium rounded-sm hover:bg-gray-800"
          >
            Sign In
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
