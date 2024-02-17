import React from "react";
import Container from "../../Components/Container";
import CommonBanner from "../../Components/CommonBanner";
import { FaCaretRight } from "react-icons/fa6";
import Card from "../../Components/Card/Card";
import Image from '../../assets/product.jpg';

function Shop() {
  return (
    <div className="py-5">
      <CommonBanner />
      <Container>
        <div className="pb-10 lg:flex items-start justify-between gap-5">
          <div className="lg:w-[22%] lg:block hidden bg-rose-100 rounded-md p-5">
            <h4 className="text-[20px] font-semibold mb-5 border-b-2 border-primary w-[60px]">
              Category
            </h4>
            <ul className="space-y-2">
              <li className="transition-all duration-300 hover:text-primary">
                <button className="flex items-center gap-1">
                  <FaCaretRight /> Apple
                </button>
              </li>
              <li className="transition-all duration-300 hover:text-primary">
                <button className="flex items-center gap-1">
                  <FaCaretRight /> Samsung
                </button>
              </li>
              <li className="transition-all duration-300 hover:text-primary">
                <button className="flex items-center gap-1">
                  <FaCaretRight /> Google
                </button>
              </li>
              <li className="transition-all duration-300 hover:text-primary">
                <button className="flex items-center gap-1">
                  <FaCaretRight /> OnePlus
                </button>
              </li>
              <li className="transition-all duration-300 hover:text-primary">
                <button className="flex items-center gap-1">
                  <FaCaretRight /> Huawei
                </button>
              </li>
              <li className="transition-all duration-300 hover:text-primary">
                <button className="flex items-center gap-1">
                  <FaCaretRight /> Xiaomi
                </button>
              </li>
              <li className="transition-all duration-300 hover:text-primary">
                <button className="flex items-center gap-1">
                  <FaCaretRight />
                  Realme
                </button>
              </li>
              <li className="transition-all duration-300 hover:text-primary">
                <button className="flex items-center gap-1">
                  <FaCaretRight />
                  Vivo
                </button>
              </li>
              <li className="transition-all duration-300 hover:text-primary">
                <button className="flex items-center gap-1">
                  <FaCaretRight />
                  OPPO
                </button>
              </li>
              <li className="transition-all duration-300 hover:text-primary">
                <button className="flex items-center gap-1">
                  <FaCaretRight />
                  Tecno
                </button>
              </li>
              <li className="transition-all duration-300 hover:text-primary">
                <button className="flex items-center gap-1">
                  <FaCaretRight />
                  Infinix
                </button>
              </li>
            </ul>
            <h4 className="text-[20px] font-semibold mt-5">Price Range</h4>
            <hr className="border-b-2 border-primary mb-5 w-[60px]" />
            <ul className="space-y-2">
              <li className="transition-all duration-300 hover:text-primary">
                <button className="flex items-center gap-1">
                  <FaCaretRight /> {"10000 < 20000"}
                </button>
              </li>
              <li className="transition-all duration-300 hover:text-primary">
                <button className="flex items-center gap-1">
                  <FaCaretRight /> {"21000 < 30000"}
                </button>
              </li>
              <li className="transition-all duration-300 hover:text-primary">
                <button className="flex items-center gap-1">
                  <FaCaretRight /> {"31000 < 35000"}
                </button>
              </li>
              <li className="transition-all duration-300 hover:text-primary">
                <button className="flex items-center gap-1">
                  <FaCaretRight /> {"36000 < 50000"}
                </button>
              </li>
              <li className="transition-all duration-300 hover:text-primary">
                <button className="flex items-center gap-1">
                  <FaCaretRight /> {"51000 < 150000"}
                </button>
              </li>
            </ul>
            <div className="mt-10">
              <img src={Image} alt="" className="w-full h-[500px]" />
            </div>
          </div>
          <div className="lg:w-[78%] w-full">
            <div className="p-5 rounded-md bg-rose-100 lg:block hidden mb-5">
              <form action="">
                <div className="relative">
                  <input type="text" placeholder="Search Your Dream Phone?" className="w-full px-3 outline-0 border py-2 rounded" />
                  <input type="submit" value="Search" className="px-3 py-2 bg-primary text-white rounded absolute top-0 right-0 cursor-pointer" />
                </div>
              </form>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-3 grid-cols-1 gap-5">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <div className="py-5 text-center">
              TODO Pagination Here
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Shop;
