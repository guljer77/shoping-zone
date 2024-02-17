import React, { useState } from "react";
import Container from "../../Components/Container";
import Image from "../../assets/product.jpg";
import { Link } from "react-router-dom";
import RelatedProduct from "./DetailsCategory/RelatedProduct";

function Details() {
  const [value, setValue] = useState(1);
  const increment = () => {
    if (value < 7) {
      setValue(value + 1);
    }
  };
  const decrement = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  return (
    <div className="py-10">
      <Container>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          <div>
            <img src={Image} alt="" />
          </div>
          <div>
            <h4 className="text-[22px] font-semibold pb-2">
              Product Name Here
            </h4>
            <p className="text-[15px] font-normal pb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              recusandae ab animi ex laudantium quibusdam odit iure nam
              similique maiores unde fuga, explicabo natus rerum in atque
              officiis eum non?
            </p>
            <h6 className="text-red-600">
              <del>Price $35.00</del>
            </h6>
            <h6 className="text-[18px] font-semibold">Price $ 25.00</h6>
            <div className="py-3">
              <h6 className="text-[20px] font-semibold pb-2">
                Chose Your Color
              </h6>
              <div className="flex items-center justify-start gap-2">
                <div className="text-center">
                  <span className="w-[20px] mx-auto block cursor-pointer h-[20px] border border-black rounded-full bg-white shadow-md"></span>
                </div>
                <div className="text-center">
                  <span className="w-[20px] mx-auto block cursor-pointer h-[20px] border border-black rounded-full bg-black shadow-md"></span>
                </div>
                <div className="text-center">
                  <span className="w-[20px] mx-auto block cursor-pointer h-[20px] border border-black rounded-full bg-purple-600 shadow-md"></span>
                </div>
                <div className="text-center">
                  <span className="w-[20px] mx-auto block cursor-pointer h-[20px] border border-black rounded-full bg-cyan-600 shadow-md"></span>
                </div>
                <div className="text-center">
                  <span className="w-[20px] mx-auto block cursor-pointer h-[20px] border border-black rounded-full bg-rose-600 shadow-md"></span>
                </div>
              </div>
            </div>
            <div className="py-3">
              <h6 className="text-[20px] font-semibold pb-2">
                Chose Your Size
              </h6>
              <div className="flex items-center justify-start gap-2">
                <div className="text-center">
                  <span className="w-[30px] mx-auto cursor-pointer flex items-center justify-center h-[30px] border border-black rounded-full shadow-md">
                    XL
                  </span>
                </div>
                <div className="text-center">
                  <span className="w-[30px] mx-auto cursor-pointer flex items-center justify-center h-[30px] border border-black rounded-full shadow-md">
                    L
                  </span>
                </div>
                <div className="text-center">
                  <span className="w-[30px] mx-auto cursor-pointer flex items-center justify-center h-[30px] border border-black rounded-full shadow-md">
                    M
                  </span>
                </div>
                <div className="text-center">
                  <span className="w-[30px] mx-auto cursor-pointer flex items-center justify-center h-[30px] border border-black rounded-full shadow-md">
                    S
                  </span>
                </div>
                <div className="text-center">
                  <span className="w-[30px] mx-auto cursor-pointer flex items-center justify-center h-[30px] border border-black rounded-full shadow-md">
                    XS
                  </span>
                </div>
              </div>
            </div>
            <div className="pb-5">
              <h6 className="text-[20px] font-semibold pb-2">Quantity</h6>
              <div className="p-1 rounded border border-black lg:w-[25%] flex items-center justify-between">
                <button
                  onClick={decrement}
                  className="w-[30px] h-[30px] bg-primary text-white"
                >
                  -
                </button>
                <span>{value}</span>
                <button
                  onClick={increment}
                  className="w-[30px] h-[30px] bg-primary text-white"
                >
                  +
                </button>
              </div>
            </div>
            <Link className="w-[150px] text-center py-2 text-white bg-primary rounded mt-5 block">
              Add To Cart Now
            </Link>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 pt-10">
          <div className="col-span-2 bg-rose-100 p-5 rounded">
            <h4 className="text-[22px] font-semibold pb-5">102 Review</h4>
            <div className="flex items-start justify-between gap-1 pb-5">
              <div className="w-[17%]">
                <img
                  src={Image}
                  alt=""
                  className="w-[100px] h-[100px] rounded bg-white p-1"
                />
              </div>
              <div className="w-[83%]">
                <div className="flex items-center justify-between">
                  <h6 className="text-[18px] font-medium">Md Guljer Hossain</h6>
                  <p>Ratings</p>
                </div>
                <p className="text-[14px] font-light">15 June 2024</p>
                <p className="text-[15px] font-normal">Awesome Product</p>
              </div>
            </div>
            <div className="flex items-start justify-between gap-1 pb-5">
              <div className="w-[17%]">
                <img
                  src={Image}
                  alt=""
                  className="w-[100px] h-[100px] rounded bg-white p-1"
                />
              </div>
              <div className="w-[83%]">
                <div className="flex items-center justify-between">
                  <h6 className="text-[18px] font-medium">Md Guljer Hossain</h6>
                  <p>Ratings</p>
                </div>
                <p className="text-[14px] font-light">15 June 2024</p>
                <p className="text-[15px] font-normal">Awesome Product</p>
              </div>
            </div>
            <div className="flex items-start justify-between gap-1 pb-5">
              <div className="w-[17%]">
                <img
                  src={Image}
                  alt=""
                  className="w-[100px] h-[100px] rounded bg-white p-1"
                />
              </div>
              <div className="w-[83%]">
                <div className="flex items-center justify-between">
                  <h6 className="text-[18px] font-medium">Md Guljer Hossain</h6>
                  <p>Ratings</p>
                </div>
                <p className="text-[14px] font-light">15 June 2024</p>
                <p className="text-[15px] font-normal">Awesome Product</p>
              </div>
            </div>
          </div>
          <div className="p-5 rounded bg-rose-100 lg:col-span-1 w-full">
            <h4 className="text-[20px] font-semibold pb-3">Write a Review</h4>
            <form action="">
              <div className="pb-2">
                <select className="w-full rounded py-2 outline-0 px-3">
                  <option value="">Select Your Ratings</option>
                  <option value="1">1</option>
                  <option value="1.5">1.5</option>
                  <option value="2">2</option>
                  <option value="2.5">2.5</option>
                  <option value="3">3</option>
                  <option value="3.5">3.5</option>
                  <option value="4">4</option>
                  <option value="4.5">4.5</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="pb-5">
                <textarea
                  cols="30"
                  rows="7"
                  placeholder="Write your review"
                  className="p-3 rounded w-full outline-0 resize-none"
                ></textarea>
              </div>
              <div>
                <input
                  type="submit"
                  value="Review Send"
                  className="px-5 py-2 rounded bg-primary text-white cursor-pointer"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="pt-10">
          <RelatedProduct />
        </div>
      </Container>
    </div>
  );
}

export default Details;
