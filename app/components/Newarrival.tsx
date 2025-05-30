"use client";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const products = [
  {
    tag: "Buy 1 Get 1",
    image: "/charcoal.avif",
    title: "Charcoal Detox Deep Cleansing Soap Bar, 250 gm",
    price: "₹144",
    mrp: "₹160",
    off: "10% off",
  },
  {
    tag: "Bestseller",
    image: "/hydrating.avif",
    title: "Hydrating Aqua Blue Hand Wash, 500 ml (2×250 ml)",
    price: "₹144",
    mrp: "₹160",
    off: "10% off",
  },
  {
    tag: "Buy 1 Get 1",
    image: "/bodywash.avif",
    title: "Refreshing Citrus Body Wash, 400 ml",
    price: "₹180",
    mrp: "₹200",
    off: "10% off",
  },
  {
    tag: "Bestseller",
    image: "/wet.avif",
    title: "Premium Citrus Wet Wipes, 60 Sheets",
    price: "₹144",
    mrp: "₹160",
    off: "10% off",
  },
  {
    tag: "Buy 1 Get 1",
    image: "/aloebera.jpg",
    title: "Aloe Vera Skin Soothing Gel, 200 gm (2×100 gm)",
    price: "₹144",
    mrp: "₹160",
    off: "10% off",
  },
  {
    tag: "Buy 1 Get 1",
    image: "/sandal.avif",
    title: "Sandalwood Moisturizing Bath Soap, 250 gm (2×125 gm)",
    price: "₹180",
    mrp: "₹200",
    off: "10% off",
  },
  {
    tag: "Buy 1 Get 1",
    image: "/herbal.avif",
    title: "Herbal Sandal Glow Soap, 250 gm (2×125 gm)",
    price: "₹180",
    mrp: "₹200",
    off: "10% off",
  },
];

export default function ValueDeals() {
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
    <section className="relative bg-white w-full py-6">
      <h2 className="text-3xl font-bold text-center text-blue-500 mb-5">
        TOP SELLING
      </h2>

      <div className="flex justify-end pr-8 mb-6">
        <a href="#" className="text-green-800 font-medium text-sm">
          View All
        </a>
      </div>

      {/* Left and Right Arrows */}
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
        className="flex gap-2 md:gap-12 overflow-x-auto scroll-smooth scrollbar-hide px-6 pb-4"
      >
        {products.map((item, i) => (
          <div
            key={i}
            className="min-w-[200px] max-w-[200px] bg-white p-3 flex flex-col justify-between rounded-lg shadow-sm"
          >
            <span className="bg-purple-100 text-purple-700 text-sm w-fit px-4 py-[2px] rounded font-medium inline-block">
              {item.tag}
            </span>

            {/* Image container with fixed height */}
            <div className="my-3 h-[160px] flex items-center justify-center">
              <Image
                src={item.image}
                alt="product"
                width={140}
                height={140}
                className="object-contain"
              />
            </div>

            <h3 className="text-sm font-medium py-1 line-clamp-2">
              {item.title}
            </h3>

            <div className="mt-2 flex items-center gap-2 text-sm">
              <span className="font-semibold py-6">{item.price}</span>
              <span className="line-through text-gray-500 text-xs">
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
