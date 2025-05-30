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

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const handleAddToCart = (productId: number) => {
    router.push("/cart");
  };

  return (
    <AnimatedSection>
    <div className="max-w-8xl mx-auto px-4 py-6 sm:py-8">
      {/* Product Header */}
      <div className="bg-blue-600 text-white p-6 sm:p-10 rounded text-center">
        <h1 className="text-2xl sm:text-3xl font-bold">Healthy Care Tablets</h1>
        <p className="text-base sm:text-xl">All &gt; Healthy Care Tablets</p>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        <Image
          src="/healthy care tablets.webp"
          alt="Healthy Care Tablets"
          width={600}
          height={400}
          className="rounded w-full h-auto"
          priority
        />
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Healthy Care Tablets</h2>
          <p className="text-lg sm:text-xl text-red-500 font-semibold">
            ₹1,800.00{" "}
            <span className="line-through text-gray-500 text-sm">₹2,300.00</span>
          </p>
          <p className="text-sm text-orange-600">42 items sold in last 24 hours</p>
          <p className="text-gray-700 mt-4 text-sm sm:text-base">
            Healthy Care Tablets are a herbal supplement designed to support daily energy, immunity, and overall wellness.
          </p>
          <ul className="mt-4 space-y-1 text-gray-700 text-sm sm:text-base">
            <li><strong>Availability:</strong> In stock</li>
            <li><strong>Vendor:</strong> dt-pharmacy</li>
            <li><strong>Delivery:</strong> 5–7 days from order date</li>
            <li><strong>Free shipping</strong> on orders above ₹79</li>
          </ul>
          <button
            onClick={() => handleAddToCart(3)}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full sm:w-auto"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs
        value={tab}
        onChange={handleTabChange}
        className="mb-4"
        textColor="primary"
        indicatorColor="primary"
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab label="Description" />
        <Tab label="Additional Information" />
        <Tab label="Reviews" />
      </Tabs>

      {tab === 0 && (
        <p className="text-gray-700 text-sm sm:text-base">
          Healthy Care Tablets are formulated with a unique blend of vitamins,
          minerals, and herbal extracts to help promote your immune system,
          reduce fatigue, and support metabolism and digestion. Ideal for daily
          use.
        </p>
      )}
      {tab === 1 && (
        <p className="text-gray-700 text-sm sm:text-base">
          Each tablet contains: Ashwagandha, Tulsi, Amla, Zinc, and Vitamin C.
          Take one tablet daily after breakfast or as directed by a healthcare
          professional. Store in a cool, dry place away from direct sunlight.
        </p>
      )}
      {tab === 2 && (
        <p className="text-gray-700 text-sm sm:text-base">
          No reviews yet. Be the first to review this product!
        </p>
      )}

      {/* Recommended Products */}
      <div className="py-6 sm:py-8">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">Recommended Products</h3>
        <div className="w-full overflow-x-auto">
          <div className="flex space-x-4 sm:space-x-6 px-4 sm:px-8 py-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="min-w-[280px] sm:min-w-[320px] p-4 bg-white rounded shadow-sm relative flex-shrink-0"
              >
                <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-0.5 text-xs rounded-full">
                  -{product.discount}%
                </span>
                <Link href={`/productdetail/${product.id}`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={320}
                    height={288}
                    className="object-contain h-60 sm:h-72 w-full mx-auto mb-4 cursor-pointer"
                    priority={product.id === 3}
                  />
                </Link>
                <Link href={`/productdetail/${product.id}`}>
                  <h3 className="font-semibold hover:text-blue-600 cursor-pointer text-sm sm:text-base py-2">
                    {product.name}
                  </h3>
                </Link>
                <div className="text-blue-700 font-bold mb-1 text-sm sm:text-base">
                  ₹{product.price}
                </div>
                <div className="text-sm text-gray-600 line-through mb-1">
                  ₹{product.oldPrice}
                </div>
                <p className="text-yellow-500 text-sm">
                  ⭐ {product.reviews} review(s)
                </p>
                <button
                  onClick={() => handleAddToCart(product.id)}
                  className="w-full mt-2 bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
                >
                  Add to Cart
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
