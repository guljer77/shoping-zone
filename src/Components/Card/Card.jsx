import React from "react";
import Image from "../../assets/product.jpg";
import { FaStar, FaHeart } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

function Card() {
  return (
    <div className="bg-secondary shadow-lg rounded-t-md relative">
      <img src={Image} alt="" className="w-full rounded-t-md" />
      <span className="absolute lg:top-3 top-1 lg:left-3 left-1 p-1 text-[12px] font-light bg-primary text-white rounded">
        Category
      </span>
      <div className="lg:p-5 p-2">
        <h6 className="lg:text-[15px] text-[13px] font-light bg-green-600 text-white p-1 lg:w-[70px] w-[60px] text-center rounded-md">
          Stock 25
        </h6>
        <h4 className="lg:text-[22px] text-[14px] lg:font-bold font-medium py-1">Product Name Here</h4>
        <h6 className="text-red-600 lg:text-[20px] text-[12px]">
          <del>Price $35.00</del>
        </h6>
        <h6 className="lg:text-[18px] text-[12px] font-semibold">Price $ 25.00</h6>
        <div className="lg:flex items-center gap-3">
          <div className="flex items-center lg:space-x-1 lg:text-[18px] text-[13px] text-yellow-500">
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
          </div>
          <h6 className="lg:text-[16px] text-[12px]">25k reviews</h6>
        </div>
      </div>
      <div className="flex items-center justify-between lg:p-5 p-2">
        <button className="lg:px-3 lg:py-[6px] p-1 rounded-md bg-primary text-white lg:text-[15px] text-[12px]">
          Add to cart
        </button>
        <div className="flex items-center lg:gap-3 gap-1">
          <span className="lg:px-[8px] cursor-pointer lg:py-[6px] p-1 lg:text-[20px] text-[13px] bg-gray-300 text-rose-600 rounded">
            <FaHeart />
          </span>
          <span className="lg:px-[8px] cursor-pointer lg:py-[6px] p-1 lg:text-[20px] text-[13px] bg-gray-300 rounded">
            <FaEye />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
