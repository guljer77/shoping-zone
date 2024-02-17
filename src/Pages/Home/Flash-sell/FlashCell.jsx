import React from "react";
import Container from "../../../Components/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Card from "../../../Components/Card/Card";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

function FlashCell() {
  return (
    <div className="pb-10">
      <Container>
        <div className="flex items-center justify-between pb-5">
          <div className="flex items-center gap-2">
            <span className="text-[22px] text-primary">
              <MdDashboard />
            </span>
            <h4 className="text-[24px] font-semibold">Flash Cell</h4>
          </div>
          <Link
            to="/shop"
            className="px-3 py-[6px] bg-primary text-white rounded text-[15px] font-light"
          >
            All Product
          </Link>
        </div>
        <>
          <Swiper
            slidesPerView={5}
            spaceBetween={15}
            navigation={{
              nextEl: ".button-next-slide",
              prevEl: ".button-prev-slide",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              420: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            modules={[Autoplay, Navigation]}
          >
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
          </Swiper>
          <div className="pt-5 flex items-center gap-2">
            <span className="button-prev-slide w-[40px] h-[40px] bg-primary flex items-center justify-center text-white rounded cursor-pointer transition-all duration-300 hover:bg-primary">
              <FaArrowLeftLong />
            </span>
            <span className="button-next-slide w-[40px] h-[40px] bg-primary flex items-center justify-center text-white rounded cursor-pointer transition-all duration-300 hover:bg-primary">
              <FaArrowRightLong />
            </span>
          </div>
        </>
      </Container>
    </div>
  );
}

export default FlashCell;
