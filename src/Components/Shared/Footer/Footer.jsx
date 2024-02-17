import React from "react";
import { FaCaretRight } from "react-icons/fa6";
import { FaMapMarkerAlt, FaRegEnvelopeOpen } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import Container from './../../Container';

function Footer() {
  return (
    <>
      <div className="py-10 bg-secondary text-black">
        <Container>
          <div className="lg:grid grid-cols-4 gap-5">
            <div className="lg:pb-0 pb-10">
              <h4 className="text-[18px] font-medium uppercase">
                CONTACT US
              </h4>
              <hr className="border-[1.5px] border-primary w-20" />
              <div className="pt-10">
                <div className="flex items-start gap-2 pb-5">
                  <span className="block text-[18px] text-black/80">
                    <FaMapMarkerAlt />
                  </span>
                  <p className="block text-[15px] text-black/80">
                    <span className="text-[15px] font-semibold text-black">Address:</span> 8901 Marmora Road, Glasgow D04 89 GR,
                    New York
                  </p>
                </div>
                <div className="flex items-start gap-2 pb-5">
                  <span className="block text-[18px] text-black/80">
                    <FaRegEnvelopeOpen />
                  </span>
                  <p className="block text-[15px] text-black/80">
                    <span className="text-[15px] font-semibold text-black">Email:</span> guljer.net@gmail.com
                  </p>
                </div>
                <div className="flex items-start gap-2 pb-5">
                  <span className="block text-[18px] text-black/80">
                    <FaSquarePhone />
                  </span>
                  <p className="block text-[15px] text-black/80">
                    <span className="text-[15px] font-semibold text-black">Telephone:</span> +880 1792790977
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:pb-0 pb-10">
              <h4 className="text-[18px] font-medium uppercase">
                INFORMATION
              </h4>
              <hr className="border-[1.5px] border-primary w-20" />
              <div className="pt-10">
                <div>
                  <ul className="flex flex-col space-y-4">
                    <li className="flex items-center gap-3 text-black/80 cursor-pointer transition-all duration-300 hover:text-black">
                      <FaCaretRight /> About Us
                    </li>
                    <li className="flex items-center gap-3 text-black/80 cursor-pointer transition-all duration-300 hover:text-black">
                      <FaCaretRight />
                      Stores
                    </li>
                    <li className="flex items-center gap-3 text-black/80 cursor-pointer transition-all duration-300 hover:text-black">
                      <FaCaretRight /> Privacy Policy
                    </li>
                    <li className="flex items-center gap-3 text-black/80 cursor-pointer transition-all duration-300 hover:text-black">
                      <FaCaretRight />
                      Terms & Conditions
                    </li>
                    <li className="flex items-center gap-3 text-black/80 cursor-pointer transition-all duration-300 hover:text-black">
                      <FaCaretRight /> Testimonials
                    </li>
                    <li className="flex items-center gap-3 text-black/80 cursor-pointer transition-all duration-300 hover:text-black">
                      <FaCaretRight /> Jobs
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:pb-0 pb-10">
              <h4 className="text-[18px] font-medium uppercase">
                MY ACCOUNT
              </h4>
              <hr className="border-[1.5px] border-primary w-20" />
              <div className="pt-10">
                <div>
                  <ul className="flex flex-col space-y-4">
                    <li className="flex items-center gap-3 text-black/80 cursor-pointer transition-all duration-300 hover:text-black">
                      <FaCaretRight /> My Account
                    </li>
                    <li className="flex items-center gap-3 text-black/80 cursor-pointer transition-all duration-300 hover:text-black">
                      <FaCaretRight /> Order History
                    </li>
                    <li className="flex items-center gap-3 text-black/80 cursor-pointer transition-all duration-300 hover:text-black">
                      <FaCaretRight /> Download
                    </li>
                    <li className="flex items-center gap-3 text-black/80 cursor-pointer transition-all duration-300 hover:text-black">
                      <FaCaretRight />
                      Newsletter Subscription
                    </li>
                    <li className="flex items-center gap-3 text-black/80 cursor-pointer transition-all duration-300 hover:text-black">
                      <FaCaretRight /> Transactions
                    </li>
                    <li className="flex items-center gap-3 text-black/80 cursor-pointer transition-all duration-300 hover:text-black">
                      <FaCaretRight /> Wishlist
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:pb-0 pb-10">
              <h4 className="text-[18px] font-medium uppercase">
                OUR NEWSLETTER
              </h4>
              <hr className="border-[1.5px] border-primary w-20" />
              <div className="pt-10">
                <p className="text-[15px] font-light pb-5">
                  Subscribe to the Faster Shopping list to receive updates on
                  new arrivals.
                </p>
                <div className="flex items-center border border-black w-full p-[4px]">
                  <input
                    type="text"
                    className="px-2 py-2 outline-0 bg-transparent block"
                    placeholder="Your Email"
                  />
                  <input
                    type="submit"
                    value="Subscribe"
                    className="text-[15px] uppercase block cursor-pointer text-white bg-primary absolute lg:right-24 right-10 px-2 py-[6px] rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-black py-5 text-center text-white text-[15px] font-light">
        <p>
          &copy; Copyright 2024 Faster – All Rights Reserved – Powered by
          Guljer.
        </p>
      </div>
    </>
  );
}

export default Footer;
