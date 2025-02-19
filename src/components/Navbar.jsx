import { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { useSelector,useDispatch} from "react-redux";
import { toggleSearch } from "../reduxToolkit/ValueSlice";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { cartItem } = useSelector((state) => state.cart);
  const {isSearchVisible} = useSelector((state) => state.search);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const length = cartItem.length;
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
 const handleSearch=()=>{
  dispatch(toggleSearch())
  navigate('/collection')
 }
  return (
    <nav className="navBar  flex items-center justify-between h-20  border-b-1 border-gray-300">
      {/* Sidebar Icon */}
      <div className="lg:hidden">
        <button onClick={toggleSidebar} className="p-2 focus:outline-none">
          <img src={assets.menu_icon} className="w-4 h-4" alt="Menu" />
        </button>
      </div>

      {/* Logo */}
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

      {/* Icons Group */}
      <div className="flex items-center gap-x-6" >
        <img
          src={assets.search_icon}
          className="w-6 h-6 object-cover p-0.5"
          alt="Search"
          onClick={handleSearch}
        />
        <div className="relative group">
          <img
            src={assets.profile_icon}
            className="w-6 h-6 cursor-pointer"
            alt="Profile"
          />

          {/* Dropdown Menu */}
          <div className="absolute right-0 mt-2 w-28 bg-white shadow-lg rounded-lg hidden group-hover:block transition-opacity duration-300 z-10">
            <ul className="text-sm text-gray-700">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Login
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Order
              </li>
            </ul>
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
