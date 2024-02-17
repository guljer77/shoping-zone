import React, { useState } from "react";
import Container from "../../Container";
import Logo from "../../../assets/logo (2).png";
import { Link, NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoHome } from "react-icons/io5";
import { GiShop } from "react-icons/gi";
import { useAuth } from "../../../Hooks/useAuth";
import { FaCaretDown } from "react-icons/fa";
import { GoGear } from "react-icons/go";

function Header() {
  const { user } = useAuth();
  const [profile, setProfile] = useState(false);
  return (
    <div className="sticky z-50 lg:py-1 py-2 top-0 left-0 w-full bg-secondary shadow-lg">
      <Container>
        <div className="lg:flex lg:items-center lg:justify-between lg:pb-0 pb-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img
                src={Logo}
                alt=""
                className="lg:w-[80px] w-[40px] lg:h-[80px] h-[40px]"
              />
              <span className="lg:text-[22px] text-[18px] uppercase font-bold text-primary">
                Fashion
              </span>
            </Link>
            <div className="lg:hidden block">
              <div className="flex items-center">
                <span className="text-[12px] flex items-center text-primary">
                  Language <FaCaretDown />
                </span>
                <span className="px-1 text-[12px]">|</span>
                <span className="text-[12px] flex items-center text-primary">
                  Currency <FaCaretDown />
                </span>
                <span className="pl-1 text-[12px]">|</span>
              </div>
            </div>
          </div>
          <div className="lg:block hidden">
            <ul className="flex items-center space-x-10">
              <li className="text-[17px] font-medium">
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li className="text-[17px] font-medium">
                <NavLink
                  to="/shop"
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                >
                  Shop
                </NavLink>
              </li>
              <li className="text-[17px] font-medium">
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="text-[22px] font-medium">
                <NavLink
                  to="/cart"
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                >
                  <MdOutlineShoppingCart />
                </NavLink>
              </li>
              {user ? (
                <>
                  <li
                    onClick={() => setProfile(!profile)}
                    className="text-[14px] font-medium"
                  >
                    <span className="flex items-center gap-1 cursor-pointer">
                      <h6>{user?.displayName}</h6>
                      <span className="text-[22px]">
                        <FaCaretDown />
                      </span>
                    </span>
                  </li>
                </>
              ) : (
                <li className="text-[22px] font-medium">
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                  >
                    <FaUser />
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="lg:hidden block pb-2">
          <form action="">
            <div className="relative">
              <input
                type="text"
                placeholder="Search your Dream..."
                className="w-full py-[6px] pl-[45px] rounded pr-3 outline-0 border"
              />
              <button
                type="submit"
                className="absolute top-0 left-0 bg-primary py-[10.2px] rounded-s text-white px-3"
              >
                <CiSearch />
              </button>
            </div>
          </form>
        </div>
      </Container>
      <div className="lg:hidden block">
        <div className="fixed bottom-0 py-3 px-6 lg:bottom-8 w-full overflow-hidden z-50 bg-primary/80">
          <ul className="flex items-center justify-between">
            <li>
              <Link
                to="/"
                className="flex flex-col items-center text-white justify-center"
              >
                <span>
                  <IoHome className="" />
                </span>
                <span className="text-[13px] font-normal">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="flex text-white flex-col items-center justify-center"
              >
                <span>
                  <GiShop className="" />
                </span>
                <span className="text-[13px] font-normal">Shop</span>
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="flex flex-col text-white items-center justify-center"
              >
                <span>
                  <MdOutlineShoppingCart className="" />
                </span>
                <span className="text-[13px] font-normal">Cart</span>
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="flex flex-col items-center text-white justify-center"
              >
                <span>
                  <FaUser className="" />
                </span>
                <span className="text-[13px] font-normal">Account</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {profile && (
        <div className="top-16 right-20 absolute bg-gray-200">
          <div className="py-2 px-5 w-[160px]">
            <Link
              to="/profile"
              className="flex items-center gap-2 pb-2 text-[15px]"
            >
              <FaUser /> Profile
            </Link>
            <span className="flex items-center gap-2 cursor-pointer text-[15px]">
              <GoGear className="animate-spin" /> Setting
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
