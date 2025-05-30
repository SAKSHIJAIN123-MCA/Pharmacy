"use client";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const products = [
  {
    tag: "Limited Offer",
    image: "/char.avif",
    title: "Charcoal Revival Cleansing Bar – 250g",
    price: "₹135",
    mrp: "₹180",
    off: "25% off",
  },
  {
    tag: "Top Rated",
    image: "/ocean.avif",
    title: "OceanMist Antibacterial Hand Wash Duo – 500ml",
    price: "₹158",
    mrp: "₹198",
    off: "20% off",
  },
  {
    tag: "New Arrival",
    image: "/body gel.avif",
    title: "Body Bloom Hydrating Shower Gel – 400ml",
    price: "₹165",
    mrp: "₹220",
    off: "25% off",
  },
  {
    tag: "Best Value",
    image: "/citrus.avif",
    title: "CitrusPop Refresh Wipes – 60 Sheets",
    price: "₹110",
    mrp: "₹145",
    off: "24% off",
  },
  {
    tag: "Hot Deal",
    image: "/gel.avif",
    title: "SkinSooth Aloe Calm Gel – Twin Pack 200g",
    price: "₹126",
    mrp: "₹160",
    off: "21% off",
  },
  {
    tag: "Buy 1 get 1",
    image: "/royal.avif",
    title: "Royal Sandal Glow Soap Bars – 2×125g",
    price: "₹150",
    mrp: "₹200",
    off: "25% off",
  },
  {
    tag: "Combo Deal",
    image: "/golden.avif",
    title: "Golden Touch Sandal Soap Set – 250g",
    price: "₹160",
    mrp: "₹210",
    off: "24% off",
  }
];

export default function Deals() {
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
    <section className="relative bg-white w-full py-12">
      <h2 className="text-3xl font-bold text-center text-blue-500 mb-5">
        TOP PRODUCTS
      </h2>
      <div className="flex justify-end pr-8 mb-6">
        <a href="#" className="text-green-800 font-medium text-sm">
          View All
        </a>
      </div>

      {/* Left and Right Scroll Arrows */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-4 top-1/2 z-10 -translate-y-1/2 p-2"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-10 top-1/2 z-10 -translate-y-1/2 p-2"
      >
        <ChevronRight size={20} />
      </button>

      {/* Product Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-2 md:gap-12 overflow-x-auto scroll-smooth scrollbar-hide px-6 pb-6"
      >
        {products.map((item, i) => (
          <div
            key={i}
            className="min-w-[160px] sm:min-w-[200px] max-w-[200px] bg-white p-3 flex flex-col justify-between rounded-lg shadow-sm"
          >
           <span className="bg-purple-100 text-purple-700 text-sm w-fit px-4 py-[2px] rounded font-medium inline-block">
              {item.tag}
            </span>

            {/* Image container with fixed height */}
            <div className="my-3 h-[160px] sm:h-[180px] flex items-center justify-center">
              <Image
                src={item.image}
                alt="product"
                width={140}
                height={140}
                className="object-contain"
              />
            </div>

            <h3 className="text-sm font-medium line-clamp-2">{item.title}</h3>

            <div className="mt-2 flex items-center gap-2 text-sm">
              <span className="font-semibold">{item.price}</span>
              <span className="line-through text-gray-500 text-xs py-6">
                {item.mrp}
              </span>
              <span className="text-green-600 text-xs">{item.off}</span>
            </div>

            <button className="mt-3 w-full bg-blue-500 hover:bg-green-900 text-white py-1.5 rounded">
              ADD
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
