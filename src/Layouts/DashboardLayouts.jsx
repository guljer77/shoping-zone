import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { Outlet } from "react-router-dom";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import { IoIosClose } from "react-icons/io";
import { useAuth } from "../Hooks/useAuth";

function DashboardLayouts() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const togglerOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="lg:flex items-start justify-between">
      <div className="lg:w-[23%] lg:block hidden z-50">
        <div className="fixed h-screen w-[23%] border-r border-black top-0 left-0 z-50">
          <Sidebar />
        </div>
      </div>
      <div className="lg:w-[77%] w-full z-30">
        <div className="p-5 bg-gray-100 border-b border-black w-full flex items-center justify-between gap-5">
          <div className="w-[75%] lg:block hidden">
            <form action="">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search What you want.."
                  className="w-full py-[7px] rounded-s outline-0 border px-3"
                />
                <input
                  type="submit"
                  value="Search"
                  className="absolute px-3 py-[7px] bg-rose-600 right-[1px] text-white"
                />
              </div>
            </form>
          </div>
          <div className="lg:w-[25%] w-full flex items-center lg:justify-end justify-between">
            <div className="flex items-center gap-1 cursor-pointer">
              <h4 className="text-[15px] font-semibold uppercase text-rose-600">
                {user?.displayName}
              </h4>
            </div>
            <span onClick={togglerOpen} className="text-[26px] lg:hidden block">
              {open ? <IoIosClose /> : <IoMenuOutline />}
            </span>
          </div>
          {open && (
            <div className="fixed top-0 left-0 h-screen w-[270px] z-50">
              <Sidebar />
            </div>
          )}
        </div>
        <div className="p-5 z-30">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayouts;
