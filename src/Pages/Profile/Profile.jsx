import React from "react";
import Container from "../../Components/Container";
import Image from "../../assets/product.jpg";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaRegCircleUser, FaHeart } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { useAuth } from "../../Hooks/useAuth";

function Profile() {
  const navigate = useNavigate();
  const { userSignOut } = useAuth();
  const signOut = () => {
    userSignOut()
      .then(() => {
        navigate("/");
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className="py-10">
      <Container>
        <div className="lg:flex items-start justify-start">
          <div className="lg:w-[25%] w-full bg-rose-600 rounded-s-md">
            <div className="py-10">
              <img
                src={Image}
                alt=""
                className="w-[140px] h-[140px] mx-auto rounded-full bg-white p-1"
              />
              <h6 className="text-[22px] text-white font-semibold text-center mt-2">
                Md Guljer Hossain
              </h6>
            </div>
            <hr className="border border-white" />
            <div className=" pb-10">
              <ul>
                <li className="py-3 pl-10 uppercase text-[16px] font-medium border-b border-white">
                  <Link to='/profile' className="flex items-center gap-2 text-white">
                    <span>
                      <FaRegCircleUser />
                    </span>
                    Profile
                  </Link>
                </li>
                <li className="py-3 pl-10 uppercase text-[16px] font-medium border-b border-white">
                  <Link to='/profile/order' className="flex items-center gap-2 text-white">
                    <span>
                      <IoMdCart />
                    </span>
                    Order
                  </Link>
                </li>
                <li className="py-3 pl-10 uppercase text-[16px] font-medium border-b border-white">
                  <Link to='/profile/wishlist' className="flex items-center gap-2 text-white">
                    <span>
                      <FaHeart />
                    </span>
                    Wishlist
                  </Link>
                </li>
                <li onClick={signOut} className="py-3 pl-10 uppercase text-[16px] font-medium">
                  <button className="flex items-center gap-2 text-white">
                    <span>
                      <MdLogout />
                    </span>
                    MdLogout
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-[75%] h-[497px] w-full bg-rose-100 rounded-e-md p-5">
            <Outlet />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Profile;
