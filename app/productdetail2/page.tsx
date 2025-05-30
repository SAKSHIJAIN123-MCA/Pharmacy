"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Tabs, Tab } from "@mui/material";
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
];

const ProductPage = () => {
  const router = useRouter();
  const [tab, setTab] = useState(0);

  const handleTabChange = (_: any, newValue: number) => {
    setTab(newValue);
  };

  return (
    <AnimatedSection>
    <div className="max-w-8xl mx-auto px-4 py-8">
      {/* Product Header */}
      <div className="bg-blue-600 text-white p-6 sm:p-10 rounded text-center">
        <h1 className="text-2xl sm:text-3xl font-bold">CBD Oil</h1>
        <p className="text-lg sm:text-xl">All &gt; CBD Oil</p>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 my-8">
        <Image
          src="/cbd oil main.webp"
          alt="CBD Oil"
          width={600}
          height={400}
          className="rounded w-full h-auto object-contain"
        />
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2">CBD Oil</h2>
          <p className="text-lg sm:text-xl text-red-500 font-semibold">
            ₹2,500.00{" "}
            <span className="line-through text-gray-500 text-sm sm:text-base">
              ₹3,000.00
            </span>
          </p>
          <p className="text-xs sm:text-sm text-orange-600">
            50 items sold in last 12 hours
          </p>
          <p className="text-gray-700 mt-4 text-sm sm:text-base leading-relaxed">
            CBD oil is derived from cannabis, providing numerous health
            benefits. It is commonly used to help with anxiety, stress relief,
            pain management, and improving sleep quality.
          </p>
          <ul className="mt-4 space-y-1 text-gray-700 text-xs sm:text-sm">
            <li>
              <strong>Availability:</strong> 30 in stock
            </li>
            <li>
              <strong>Vendor:</strong> health-nature
            </li>
            <li>
              <strong>Delivery:</strong> 3–5 days from order date
            </li>
            <li>
              <strong>Free shipping</strong> on orders above ₹99
            </li>
          </ul>
          <button
            onClick={() => router.push("/cart")}
            className="mt-4 w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>

     
      {/* Tabs */}
      <Tabs value={tab} onChange={handleTabChange} className="mb-4 overflow-x-auto">
        {/* Added overflow-x-auto so tabs don't break on mobile */}
        <Tab label="Description" />
        <Tab label="Additional Information" />
        <Tab label="Reviews" />
      </Tabs>

      {tab === 0 && (
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Discover fast, effective relief from muscle and joint pain with our
          Ayurvedic Pain Relief Spray. Formulated using time-tested natural
          ingredients, this spray penetrates deep into the affected area to
          reduce inflammation, relieve stiffness, and soothe aches without any
          harmful chemicals. Simply spray on the affected area and experience
          relief within minutes. It’s non-greasy, easy to apply, and absorbs
          quickly, making it perfect for use at home, at work, or on the go.
        </p>
      )}
      {tab === 1 && (
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Additional product information including ingredients... (truncated)
        </p>
      )}
      {tab === 2 && (
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          No reviews yet. Be the first to review this product!
        </p>
      )}

      
      <div className="md:col-span-3 py-1">
        {/* Recommended Products without horizontal scroll, responsive grid */}
        <div className="bg-white py-2 px-4 sm:px-8">
          <h3 className="text-xl sm:text-2xl font-semibold mt-8 mb-4">
            Recommended Products
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {products.map((product) => (
              <div
                key={product.id}
                className="w-full sm:w-[320px] p-4 rounded shadow-sm relative bg-white"
              >
                <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-0.5 text-xs rounded-full">
                  -{product.discount}%
                </span>

                <Link href={`/productdetail/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-48 sm:h-72 w-full object-contain mx-auto mb-4 cursor-pointer"
                  />
                </Link>

                <Link href={`/productdetail/${product.id}`}>
                  <h3 className="font-semibold hover:text-blue-600 cursor-pointer py-1 sm:py-2 text-sm sm:text-base">
                    {product.name}
                  </h3>
                </Link>

                <div className="text-blue-700 font-bold mb-1 text-base sm:text-lg">
                  ₹{product.price}
                </div>
                <div className="text-sm text-gray-600 line-through mb-1">
                  ₹{product.oldPrice}
                </div>

                <p className="text-yellow-500 text-sm">
                  ⭐ {product.reviews} review(s)
                </p>
                <button className="w-full mt-2 bg-blue-700 text-white py-2 rounded text-sm sm:text-base">
                  ADD TO CART
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </AnimatedSection>
  );
};

export default ProductPage;
