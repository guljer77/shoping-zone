import React from "react";
import Container from "./Container";
import Image from "../assets/vector.png";
import { Link } from "react-router-dom";

function CommonBanner() {
  return (
    <div className="pb-10">
      <Container>
        <div className="lg:flex items-center justify-between bg-rose-100 rounded px-10">
          <div className="lg:w-1/2 w-full lg:pr-10 pr-0">
            <h3 className="text-[26px] font-semibold">Still Looking for the best online Shopping store?</h3>
            <p className="text-[15px] font-light my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              neque quisquam architecto, eum facere magni in voluptatibus porro
              id aliquam!
            </p>
            <Link to='/shop' className="px-5 py-2 rounded-md bg-primary text-white">Get Started</Link>
          </div>
          <div className="lg:w-1/2 w-full">
            <img src={Image} alt="" className="w-full h-[450px]" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CommonBanner;
