import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoIosHome, IoMdCart } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import { FaSitemap, FaUser } from "react-icons/fa";
import { CgLogIn } from "react-icons/cg";
import { useAuth } from "../../Hooks/useAuth";

function Sidebar() {
  const navigate = useNavigate();
  const {userSignOut} = useAuth();
  const logOutUser = () => {
    userSignOut()
      .then(() => {
        navigate("/");
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className="z-50 bg-gray-100 h-screen">
      <div className="py-10 border-b border-black bg-gray-100">
        <Link to="/dashboard" className="block w-full">
          <h4 className="text-[24px] w-[50%] mx-auto uppercase font-bold">
            Shopping
          </h4>
          <p className="text-[16px] w-[50%] mx-auto font-bold text-rose-600 uppercase tracking-[26px]">
            Zone
          </p>
        </Link>
      </div>
      <ul>
        <li className="py-2 pl-10 bg-gray-100 border-b border-gray-300">
          <NavLink
            to="/dashboard"
            className="flex items-center gap-1 text-[16px] font-medium"
          >
            <span>
              <IoIosHome />
            </span>
            Home
          </NavLink>
        </li>
        <li className="py-2 pl-10 bg-gray-100 border-b border-gray-300">
          <NavLink
            to="/dashboard/category"
            className="flex items-center gap-2 text-[16px] font-medium"
          >
            <span>
              <FaSitemap />
            </span>
            Category
          </NavLink>
        </li>
        <li className="py-2 pl-10 bg-gray-100 border-b border-gray-300">
          <NavLink
            to="/dashboard/product"
            className="flex items-center gap-2 text-[16px] font-medium"
          >
            <span>
              <BiCategory />
            </span>
            Product
          </NavLink>
        </li>
        <li className="py-2 pl-10 bg-gray-100 border-b border-gray-300">
          <NavLink
            to="/dashboard/addProduct"
            className="flex items-center gap-2 text-[16px] font-medium"
          >
            <span>
              <BiCategory />
            </span>
            Add Product
          </NavLink>
        </li>
        <li className="py-2 pl-10 bg-gray-100 border-b border-gray-300">
          <NavLink
            to="/dashboard/home"
            className="flex items-center gap-2 text-[16px] font-medium"
          >
            <span>
              <IoMdCart />
            </span>
            Order History
          </NavLink>
        </li>
        <li className="py-2 pl-10 bg-gray-100 border-b border-gray-300">
          <NavLink
            to="/dashboard/users"
            className="flex items-center gap-2 text-[16px] font-medium"
          >
            <span>
              <FaUser />
            </span>
            User
          </NavLink>
        </li>
        <li onClick={logOutUser} className="pb-5 pt-[102px] pl-10 bg-gray-100">
          <button className="flex items-center gap-2 text-[18px] font-medium">
            <span>
              <CgLogIn />
            </span>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
