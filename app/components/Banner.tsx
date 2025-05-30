"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // <-- import Autoplay
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const banners = [
  "/banner1.png",
  "/banner2.png",
  "/banner3.png",
  "/banner4.png",
 
];

export default function BannerCarousel() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 py-5 relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}  
        slidesPerView={1.2}
        spaceBetween={10}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 2000,         
          disableOnInteraction: false,  
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className="banner-swiper"
      >
        {banners.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-lg overflow-hidden shadow">
              <Image
                src={src}
                alt={`Banner ${index + 1}`}
                width={300}
                height={250}
                className="w-full h-[200px] sm:h-[220px] md:h-[250px] object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Style overrides */}
      <style jsx global>{`
        /* Smaller arrows */
        .swiper-button-next,
        .swiper-button-prev {
          width: 10px;
          height: 10px;
          color: #000;
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 12px;
        }

        /* Move pagination dots below */
        .banner-swiper .swiper-pagination {
          position: static;
          margin-top: 10px;
          text-align: center;
        }

        .swiper-pagination-bullet {
          background: #999;
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          background: #003087;
        }
      `}</style>
    </div>
  );
}
