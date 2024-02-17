import React from "react";
import Container from "../../../Components/Container";
import { MdDashboard } from "react-icons/md";
import Card from "../../../Components/Card/Card";
import { Link } from "react-router-dom";

function Popular() {
  return (
    <div className="py-10">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[22px] text-primary">
              <MdDashboard />
            </span>
            <h4 className="lg:text-[24px] text-[15px] font-semibold">Popular Product</h4>
          </div>
          <Link to="/shop" className="px-3 py-[6px] bg-primary text-white rounded text-[15px] font-light">All Product</Link>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:gap-5 gap-2 pt-5">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Container>
    </div>
  );
}

export default Popular;
