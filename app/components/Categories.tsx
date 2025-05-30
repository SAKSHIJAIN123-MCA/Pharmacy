"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ChevronRight } from "lucide-react";

const features = [
  {
    title: "Anti-Cancer",
    subtitle: "EXPLORE NOW",
    icon: "/houseicon.png",
    bg: "bg-blue-200",
    href: "/pharmacy",
  },
  {
    title: "Anti HIV",
    subtitle: "SHOP NOW",
    icon: "/medicineicon.png",
    bg: "bg-purple-200",
    href: "/offers",
  },
  {
    title: "Personal Care",
    subtitle: "VIEW RANGE",
    icon: "/doctoricon.png",
    bg: "bg-green-200",
    href: "/appointment",
  },
  {
    title: "Diabetes Care",
    subtitle: "MANAGE HEALTH",
    icon: "/insuranceicon.png",
    bg: "bg-yellow-200",
    href: "/insurance",
  },
  {
    title: "Sexual Health",
    subtitle: "LEARN MORE",
    icon: "/labtesticon.png",
    bg: "bg-pink-200",
    href: "/lab-tests",
  },
];

export default function FeatureCarousel() {
  const scrollRef = useRef(null);

  return (
    <div className="py-15">
      <div className="max-w-screen-xl mx-auto px-4">

        {/* 💙 Heading */}
      <h2 className="text-3xl font-bold text-center text-blue-500 mb-10">
          SHOP OUR CATEGORIES
        </h2>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth md:grid md:grid-cols-5 md:overflow-visible"
        >
          {features.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className={`${item.bg} min-w-[200px] md:min-w-0 p-4 rounded-xl hover:shadow transition-all`}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-start gap-3">
                  <Image src={item.icon} alt="icon" width={32} height={32} />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600 mt-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <ChevronRight className="text-black mt-1" size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
