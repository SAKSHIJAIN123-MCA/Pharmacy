"use client";
import Link from "next/link";
import Image from "next/image";
import { FaUser, FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 text-sm w-full bg-white shadow">
      {/* Top Bar */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-10 py-3 bg-white shadow-sm gap-3 md:gap-0">
        {/* Left: Logo */}
        <div className="flex justify-center items-center">
          <Image
            src="/rabhas logo.png"
            alt="Rabhas"
            width={125}
            height={45}
            className="object-contain"
          />
        </div>

        {/* Left: Nav Links */}

        <div className="hidden md:flex gap-8 text-lg font-medium font-albert">
          <Link href="/" className="text-teal-500 font-semibold font-albert">
            Home
          </Link>
          <Link href="/products">All Products</Link>
          <Link href="/company">Company</Link>
          <Link href="/about">About Us</Link>
          <Link href="/howwork">How We Work</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Right: Search + Cart + Login */}
        <div className="flex items-center gap-6">
          {/* Search */}
          <div className="hidden md:flex">
            <div className="relative w-[260px]">
              <input
                type="text"
                placeholder="Search"
                className="w-full rounded-full shadow px-4 py-3 pl-5 text-sm outline-none"
              />
              <div className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 cursor-pointer">
                <img
                  src="/search2.webp"
                  alt="Search Icon"
                  className="w-5 h-5"
                />
              </div>
            </div>
          </div>

          {/* Cart */}
          <Link href="/cart" className="relative">
            <FaShoppingCart className="text-gray-700 text-xl" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1">
              0
            </span>
          </Link>

          {/* Language Selector */}
          <select className="mx-1 border px-2 py-1 rounded-md text-sm outline-none">
            <option value="en">🇺🇸 English</option>
            <option value="ja">🇯🇵 Japanese</option>
            <option value="ko">🇰🇷 Korean</option>
            <option value="zh">🇹🇼 Taiwanese</option>
            <option value="fr">🇫🇷 French</option>
            <option value="hu">🇭🇺 Hungarian</option>
          </select>

          {/* Login */}
          <Link
            href="/login"
            className="flex items-center border px-3 py-1 rounded-md"
          >
            <FaUser className="mr-2" />
            Login
          </Link>
        </div>
      </div>

      {/* Sub Navigation Bar */}
      <div className="bg-blue-400 text-white px-4 sm:px-6 lg:px-10 py-2 text-base whitespace-nowrap overflow-x-auto scrollbar-thin scrollbar-thumb-white/40 scrollbar-track-blue-400">
        <div className="flex gap-10 min-w-max">
          <Link href="#">Anti-Cancer</Link>
          <Link href="#">Anti HIV</Link>
          <Link href="#">Personal Care</Link>
          <Link href="#">Diabetes Care</Link>
          <Link href="#">Sexual Health</Link>
          <Link href="#">Vitamins & Suplements</Link>
          <Link href="#">Veterinary</Link>
          <Link href="#">Hair Care</Link>
          <Link href="#">Others</Link>
        </div>
      </div>
    </header>
  );
}
