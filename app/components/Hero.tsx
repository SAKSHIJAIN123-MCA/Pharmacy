"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // 👈 Navigation removed
import "swiper/css";
import "swiper/css/pagination"; // 👈 Only necessary styles

import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";


export default function HomePage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full bg-white">
      {/* Hero Swiper Section */}
      <div className="w-full h-[300px] text-white">
        <div className="mx-auto px-2 py-2">
          <Swiper
            modules={[Pagination, Autoplay]} // 👈 Navigation removed
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            className="rounded-2xl overflow-hidden"
          >
            <SwiperSlide>
              <img
                src="/hero1.png"
                alt="Slide 1"
                className="w-full h-[300px] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/hero2.png"
                alt="Slide 2"
                className="w-full h-[300px] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/hero3.png"
                alt="Slide 3"
                className="w-full h-[300px] object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>


    </div>
  );
}
