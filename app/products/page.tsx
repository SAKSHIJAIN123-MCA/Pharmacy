"use client";

import Link from "next/link";
import { useState } from "react";
import AnimatedSection from "../components/AnimatedSection"; 

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  discount: number;
  reviews: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Ayurvedic Pain Relief Spray",
    oldPrice: 2300,
    price: 1800,
    discount: 21,
    reviews: 2,
    image: "/pain relief spray.webp",
  },
  {
    id: 2,
    name: "CBD Oil 1500 MG Spectrum",
    oldPrice: 2300,
    price: 1800,
    discount: 21,
    reviews: 1,
    image: "/cbd oil main.webp",
  },
  {
    id: 3,
    name: "Healthy Care Tablets",
    oldPrice: 2300,
    price: 1800,
    discount: 21,
    reviews: 1,
    image: "/healthy care tablets.webp",
  },
  {
    id: 4,
    name: "Microscope",
    oldPrice: 2300,
    price: 1800,
    discount: 21,
    reviews: 1,
    image: "/microscope.webp",
  },
  {
    id: 5,
    name: "Multivitamin Tablets",
    oldPrice: 2300,
    price: 1800,
    discount: 21,
    reviews: 1,
    image: "/multi vitamin tablets.webp",
  },
  {
    id: 6,
    name: "Veterinary Drugs",
    oldPrice: 2300,
    price: 1800,
    discount: 21,
    reviews: 1,
    image: "/healthy care tablets.webp",
  },
];

export default function ProductsPage() {
  const [sort, setSort] = useState("");

  return (
    <AnimatedSection>
    <div className="bg-white">
      {/* Banner */}
      <div className="bg-blue-600 py-8 text-center text-white px-4 sm:px-6 md:px-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          Products
        </h1>
        <p className="text-sm sm:text-base mt-3 sm:mt-4">
          <Link href="/" className=" hover:text-gray-200">
            Home
          </Link>{" "}
          &gt; All collections &gt; Products
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="space-y-8 md:col-span-1">
          <div>
            <h2 className="font-semibold text-xl mb-4">Category</h2>
            <ul className="space-y-4 text-lg">
              <li>- Vitamin Tablets</li>
              <li>+ Cough Syrup</li>
              <li>+ Pain Relief Spray</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-4">Filter: Availability</h2>
            <ul className="text-lg space-y-4">
              <li>In Stock (8)</li>
              <li className="text-gray-400">Out of Stock (0)</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-4">Best Sellers</h2>
            <div className="space-y-10">
              <div className="p-4 md:p-8 rounded shadow bg-white">
                <img
                  src="/pain relief spray.webp"
                  alt="Ayurvedic Pain Relief Spray"
                  className="w-300px h-[95px] mb-8 object-contain"
                />
                <p className="font-medium text-sm">
                  Ayurvedic Pain Relief Spray
                </p>
                <p className="text-blue-700 font-bold py-6">₹1,800.00</p>
                <p className="text-gray-500 line-through text-xs">₹2,300.00</p>

                <p className="text-yellow-500 text-xs mt-1">
                  ⭐⭐⭐⭐⭐ 2 reviews
                </p>
                <button className="w-full bg-blue-700 text-white py-2.5 text-sm rounded mt-3">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>

          <div className="p-4">
            <h2 className="font-bold text-xl mb-4">New Arrivals</h2>

            <div className="space-y-6">
              {/* Item 1 */}
              <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded shadow-sm">
                <img
                  src="cbd oil main.webp"
                  alt="Pain Killer"
                  className="w-20 h-20 object-contain"
                />
                <div>
                  <h3 className="text-lg font-medium">Pain Killer</h3>
                  <p className="text-sm font-semibold">Rs. 200.00</p>
                  <p className="text-sm text-gray-400 line-through">
                    Rs. 300.00
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded shadow-sm">
                <img
                  src="microscope.webp"
                  alt="Stethoscope"
                  className="w-20 h-20 object-contain"
                />
                <div>
                  <h3 className="text-lg font-medium">R.V Stethoscope</h3>
                  <p className="text-sm font-semibold">Rs. 1,100.00</p>
                  <p className="text-sm text-gray-400 line-through">
                    Rs. 1,200.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="md:col-span-3 py-2">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-2 sm:space-y-0">
            <h2 className="text-xl font-bold">All Products</h2>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-gray-300 p-2 rounded w-full sm:w-auto"
            >
              <option value="">Sort By</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
            {products.map((product, index) => (
              <div
                key={product.id + "-" + index}
                className="p-4 rounded shadow-sm relative flex flex-col"
              >
                <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-0.5 text-xs rounded-full">
                  -{product.discount}%
                </span>

                {/* Image Link */}
                <Link href={`/productdetail${index + 1}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-48 sm:h-60 object-contain mx-auto mb-6 cursor-pointer"
                  />
                </Link>

                {/* Name Link */}
                <Link href={`/productdetail${index + 1}`}>
                  <h3 className="font-semibold hover:text-blue-600 cursor-pointer py-2">
                    {product.name}
                  </h3>
                </Link>

                <div className="text-blue-700 font-bold mb-1">
                  ₹{product.price}
                </div>
                <div className="text-sm text-gray-600 line-through mb-2">
                  ₹{product.oldPrice}
                </div>

                <p className="text-yellow-500 text-sm mb-4">
                  ⭐ {product.reviews} review(s)
                </p>
                <button className="w-full mt-auto bg-blue-700 text-white py-2 rounded">
                  ADD TO CART
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-4 flex-wrap gap-2">
            <button className="border px-3 py-1 bg-blue-700 text-white rounded">
              1
            </button>

            <Link href="/products?page=2">
              <button className="border border-blue-700 px-3 py-1 text-blue-700 hover:bg-blue-700 hover:text-white transition rounded">
                2
              </button>
            </Link>

            <Link href="/products?page=2">
              <button className="border border-blue-700 px-3 py-1 text-blue-700 hover:bg-blue-700 hover:text-white transition rounded">
                &rarr;
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </AnimatedSection>
  );
}
