import React from "react";
import "./banner.css";
import { CiSearch } from "react-icons/ci";

function Banner() {
  return (
    <div className="bg-banner flex items-center justify-center w-full h-[90vh]">
      <div className="text-white/80">
        <div className="text-center lg:px-0 px-5">
          <h2 className="lg:text-[36px] text-[26px] font-bold lg:pb-0 pb-3">
            All the assets you need, in one place
          </h2>
          <p className="text-[16px] font-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatum, fugit!
          </p>
          <form action="">
            <div className="relative mt-3">
              <input
                type="text"
                placeholder="What you need please search here"
                className="w-full px-3 py-2 rounded-md outline-0 border text-black"
              />
              <button className="absolute bg-primary px-5 py-[6px] top-[3px] right-[6px] rounded-md text-[24px] text-white"><CiSearch /></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Banner;
