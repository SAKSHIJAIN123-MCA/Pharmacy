"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
  const [sort, setSort] = useState("");

  const handleTabChange = (_: any, newValue: number) => {
    setTab(newValue);
  };

  return (
    <AnimatedSection>
    <div className="max-w-8xl mx-auto px-4 py-8">
      {/* Product Header */}
      <div className="bg-blue-600 text-white p-6 sm:p-12 rounded text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Ayurvedic Pain Relief Spray
        </h1>
        <p className="text-base sm:text-xl mt-2 sm:mt-4">
          All &gt; Ayurvedic Pain Relief Spray
        </p>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 my-12">
        <Image
          src="/pain relief spray.webp"
          alt="Ayurvedic Pain Relief Spray"
          width={600}
          height={300}
          className="rounded w-full max-w-full object-contain"
        />

        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-8">
            Ayurvedic Pain Relief Spray
          </h2>
          <p className="text-lg sm:text-xl text-red-500 font-semibold">
            ₹1,800.00{" "}
            <span className="line-through text-gray-500 text-sm sm:text-base">
              ₹2,300.00
            </span>
          </p>
          <p className="text-sm sm:text-base text-orange-600">
            29 items sold in last 16 hours
          </p>
          <p className="text-gray-700 mt-12 text-sm sm:text-base leading-relaxed">
            Nunc vehicula quam semper odio varius tincidunt. Vestibulum ante
            ipsum primis...
          </p>
          <ul className="mt-6 space-y-5 text-gray-700 text-sm sm:text-base">
            <li>
              <strong>Availability:</strong> 15 in stock
            </li>
            <li>
              <strong>Vendor:</strong> dt-pharmacy
            </li>
            <li>
              <strong>Delivery:</strong> 5–7 days from order date
            </li>
            <li>
              <strong>Free shipping</strong> on orders above ₹79
            </li>
          </ul>
          <button
            onClick={() => router.push("/cart")}
            className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full sm:w-auto"
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
        {/* Horizontal Scrollable Full-Width Product Row */}
        <div className="w-screen bg-white py-2 overflow-x-auto">
          <h3 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 px-4 sm:px-8">
            Recommended Products
          </h3>
          <div className="flex space-x-4 sm:space-x-6 px-4 sm:px-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="min-w-[280px] sm:min-w-[320px] p-4 rounded shadow-sm relative flex-shrink-0 bg-white"
                // reduced min width on mobile so multiple fit in scroll
              >
                <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-0.5 text-xs rounded-full">
                  -{product.discount}%
                </span>

                <Link href={`/productdetail/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-48 sm:h-72 w-full object-contain mx-auto mb-4 cursor-pointer"
                    // smaller height on mobile, full width
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
