import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as apiClient from "../../apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import corn from "../../assets/corn_img.png";
import { useAppContext } from "../../contexts/appContext";

const adminLinks = [
  { title: "Add New Campaign", url: "/admin/new" },
  { title: "Back to Website", url: "/" },
];

const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { showToast } = useAppContext();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: apiClient.logout, // Add signOut function in apiClient
    onSuccess: async () => {
      showToast({ message: "Signed Out Successfully", type: "SUCCESS" });
      await queryClient.invalidateQueries({ queryKey: ["validateToken"] });
      navigate("/admin-signin");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const handleLogout = () => {
    mutation.mutate();
  };

  return (
    <div className="w-full py-7 fixed left-0 z-50 bg-white shadow-md transition-all duration-300">
      <div className="w-[90%] mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/admin/dashboard" className="flex items-center gap-2">
            <img src={corn} alt="" className="h-7 w-7" />
            <div className="py-2">
              <h1 className="text-2xl font-light text-gray-900">WIARM Admin</h1>
            </div>
          </Link>

          {/* Nav Links for Medium and Larger Screens */}
          <div className="hidden md:flex items-center gap-6">
            {adminLinks.map((link) => (
              <Link
                key={link.title}
                to={link.url}
                className="text-sm font-medium text-gray-900 hover:underline"
              >
                {link.title}
              </Link>
            ))}
            <button
              onClick={handleLogout}
              className="text-sm font-medium text-gray-900 hover:underline"
            >
              Logout
            </button>
          </div>

          {/* Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-900 border-1 rounded-full p-2 focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="black"
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
          <div className="mt-[-1vh] py-5 absolute top-full left-0 w-full bg-white shadow-md flex flex-col space-y-2 md:hidden z-40">
            {adminLinks.map((link) => (
              <Link
                key={link.title}
                to={link.url}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                {link.title}
              </Link>
            ))}
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-left"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminNavbar;
