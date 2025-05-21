import { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import corn from "../assets/corn_img.png";

const links = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about-us" },
  { title: "Campaigns", url: "/campaigns" },
  { title: "Contact Us", url: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { id } = useParams();

  // Define admin pages
  const adminPaths = [
    "/admin-signin",
    "/register",
    "/api",
    "/contact",
    `/campaigns/${id}`,
  ];
  const isAdminPage = adminPaths.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full py-7 fixed left-0 z-50 transition-all duration-300 ${
        scrolled || isOpen || isAdminPage
          ? "bg-white shadow-md mt-[-1]"
          : "bg-transparent"
      }`}
    >
      <div className="w-[90%] mx-auto ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={corn} alt="" className="h-7 w-7" />
            <div className="py-2">
              <h1
                className={`text-2xl font-light ${
                  scrolled || isOpen || isAdminPage
                    ? "text-gray-900"
                    : "text-white"
                }`}
              >
                WIARM
              </h1>
            </div>
          </Link>

          {/* Nav Links for Medium and Larger Screens */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.title}
                to={link.url}
                className={`text-sm font-medium ${
                  scrolled || isOpen || isAdminPage
                    ? "text-gray-900"
                    : "text-white"
                } hover:underline`}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white border-1 rounded-full p-2 focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke={scrolled || isOpen || isAdminPage ? "black" : "white"}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div
            className={`mt-[-1vh] py-5 absolute top-full left-0 w-full bg-white shadow-md flex flex-col space-y-2 md:hidden z-40`}
          >
            {links.map((link) => (
              <Link
                key={link.title}
                to={link.url}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 ${
                  scrolled || isAdminPage ? "text-gray-800" : "text-gray-800"
                } hover:bg-gray-100`}
              >
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
