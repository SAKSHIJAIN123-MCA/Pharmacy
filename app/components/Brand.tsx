"use client";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const brands = [
  { name: "NIVEA", image: "/Nivea-logo.png", bgColor: "bg-blue-700" },
  { name: "AVEENO", image: "/aveeno.webp", bgColor: "bg-green-100" },
  { name: "VOLINI", image: "/volini.webp", bgColor: "bg-yellow-100" },
  { name: "REVITAL", image: "/revital logo.webp", bgColor: "bg-pink-100" },
  { name: "MAMYPOKO", image: "/mamy.webp", bgColor: "bg-purple-100" },
  { name: "FAST&UP", image: "/fast.webp", bgColor: "bg-red-100" },
];

export default function ShopByBrand() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative bg-white py-6 px-4 sm:px-6 md:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-500 mb-8 sm:mb-12">
        SHOP BY BRAND
      </h2>

      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-16 top-1/2 -translate-y-2 z-10 p-3 sm:p-4"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-2 z-10 p-3 sm:p-4"
      >
        <ChevronRight size={20} />
      </button>

      {/* Brand Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-2 sm:px-6 py-2"
      >
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-[150px] sm:w-[200px] md:w-[220px] shrink-0"
          >
            <div className="rounded-xl w-full h-[100px] sm:h-[120px] flex items-center justify-center">
              <Image
                src={brand.image}
                alt={brand.name}
                width={170}
                height={120}
                className="object-contain w-auto h-full"
              />
            </div>
            <p className="text-sm text-center mt-2 font-medium tracking-wider">{brand.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
