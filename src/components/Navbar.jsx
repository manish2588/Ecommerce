import { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleSearch } from "../reduxToolkit/ValueSlice";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { auth } from "./firebase";
import "react-toastify/dist/ReactToastify.css";

import { toast, ToastContainer } from "react-toastify";
function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { cartItem } = useSelector((state) => state.cart);

  const { isAuthenticated } = useSelector((state) => state.user);
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const length = cartItem.length;
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleSearch = () => {
    dispatch(toggleSearch());
    navigate("/collection");
  };
  const handleProfileClick = () => {
    setIsVisible(!isVisible);
    navigate("/profile");
  };
  const handleLoginButton = () => {
    setIsVisible(!isVisible);
    navigate("/login");
  };
  const handleSignOutButton = async () => {
    try {
      await auth.signOut();
      setIsVisible(!isVisible);
      toast.success("Signed Out", {
        position: "top-center",
        autoClose: 1000,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <nav className="navBar  flex items-center justify-between h-20  border-b-1 border-gray-300">
      <ToastContainer />
      <div className="lg:hidden">
        <button onClick={toggleSidebar} className="p-2 focus:outline-none">
          <img src={assets.menu_icon} className="w-4 h-4" alt="Menu" />
        </button>
      </div>

      <div className=" h-12 lg:h-16 w-auto py-2">
        <img
          src={assets.logo}
          className="object-cover h-full w-full"
          alt="Logo"
        />
      </div>

      {/* Navigation Links - Hidden on Small Screens */}
      <ul className="hidden lg:flex gap-x-4">
        <li className="text-lg cursor-pointer">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "underline decoration-dashed underline-offset-8"
                : "text-gray-800 hover:text-gray-500"
            }
          >
            HOME
          </NavLink>
        </li>
        <li className="text-lg cursor-pointer">
          <NavLink
            to="/collection"
            className={({ isActive }) =>
              isActive
                ? "underline decoration-dashed underline-offset-8"
                : "text-gray-800 hover:text-gray-500"
            }
          >
            COLLECTIONS
          </NavLink>
        </li>
        <li className="text-lg cursor-pointer hover:text-gray-500">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "underline decoration-dashed underline-offset-8"
                : "text-gray-800 hover:text-gray-500"
            }
          >
            ABOUT
          </NavLink>
        </li>
      </ul>

      <div className="flex items-center gap-x-6">
        <CiSearch
          size={30}
          onClick={handleSearch}
          className="hover:text-gray-400"
        />

        <div className="relative">
          <CgProfile
            size={30}
            className="hover:text-gray-400"
            onClick={() => setIsVisible(!isVisible)}
          />
          <div
            className={`absolute top-8 right-0.5  bg-gray-100 rounded-sm ${
              isVisible ? "block" : "hidden"
            }`}
          >
            <p
              className="hover:bg-gray-300 px-4 py-2 cursor-pointer"
              onClick={handleProfileClick}
            >
              Profile
            </p>
            <p
              className={`hover:bg-gray-300 px-4 py-2  cursor-pointer ${
                isAuthenticated && "hidden"
              }`}
              onClick={handleLoginButton}
            >
              Login
            </p>
            <p
              className={`hover:bg-gray-300 px-4 py-2  cursor-pointer ${
                !isAuthenticated && "hidden"
              }`}
              onClick={handleSignOutButton}
            >
              Signout
            </p>
          </div>
        </div>

        <NavLink to={"/cart"}>
          <p className="relative">
            <img src={assets.cart_icon} className="w-6 h-6" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 bg-black text-white rounded-full aspect-square text-[10px] text-center">
              {length}
            </p>
          </p>
        </NavLink>
      </div>

      {/* Sidebar - Visible when toggled */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-gray-600"
        >
          X
        </button>
        <ul className="mt-20 space-y-4 px-4" onClick={toggleSidebar}>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "text-gray-800 underline decoration-dashed underline-offset-8"
                  : "text-gray-800 hover:text-gray-500"
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/collection"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-800 underline decoration-dashed underline-offset-8"
                  : "text-gray-800 hover:text-gray-500"
              }
            >
              COLLECTIONS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-800 underline decoration-dashed underline-offset-8"
                  : "text-gray-800 hover:text-gray-500"
              }
            >
              ABOUT
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
