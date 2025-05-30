'use client';

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

  const handleAddToCart = (productId: number) => {
    console.log(`Add product ${productId} to cart`);
    router.push("/cart");
  };

  return (
    <AnimatedSection>
    <div className="max-w-8xl mx-auto px-4 py-6 sm:py-8">
      {/* Product Header */}
      <div className="bg-blue-600 text-white p-6 sm:p-10 rounded text-center">
        <h1 className="text-2xl sm:text-3xl font-bold">Laboratory Microscope</h1>
        <p className="text-lg sm:text-xl">All &gt; Laboratory Microscope</p>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6 sm:my-8">
        <Image
          src="/microscope.webp"
          alt="Microscope"
          width={600}
          height={400}
          className="rounded w-full h-auto object-contain"
        />

        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Laboratory Microscope</h2>
          <p className="text-lg sm:text-xl text-red-500 font-semibold">
            Rs. 5,500.00{" "}
            <span className="line-through text-gray-500 text-sm">Rs. 6,800.00</span>
          </p>
          <p className="text-sm text-orange-600">18 units sold in the last 48 hours</p>
          <p className="text-gray-700 mt-4">
            A high-quality laboratory microscope for educational and clinical purposes. Features precision optics and sturdy build quality.
          </p>
          <ul className="mt-4 space-y-1 text-gray-700 text-sm sm:text-base">
            <li><strong>Availability:</strong> 12 in stock</li>
            <li><strong>Vendor:</strong> lab-equipment-pro</li>
            <li><strong>Delivery:</strong> 4-6 days from order date</li>
            <li><strong>Free shipping</strong> on orders above ₹499</li>
          </ul>
          <button
            onClick={() => router.push("/cart")}
            className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="overflow-x-auto">
        <Tabs
          value={tab}
          onChange={handleTabChange}
          className="mb-4"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Description" />
          <Tab label="Additional Information" />
          <Tab label="Reviews" />
        </Tabs>
      </div>

      {tab === 0 && (
        <p className="text-gray-700 text-sm sm:text-base">
          This microscope is designed for laboratory professionals and students. It features 1000x magnification, LED illumination, and a metal frame for long-term durability. Perfect for biology, pathology, and research environments.
        </p>
      )}
      {tab === 1 && (
        <p className="text-gray-700 text-sm sm:text-base">
          Specifications: 40X–1000X magnification, monocular head, coarse & fine focus, built-in LED light, powered by AC adapter or 3 AA batteries. Includes: Eyepieces, dust cover, and instruction manual.
        </p>
      )}
      {tab === 2 && (
        <p className="text-gray-700 text-sm sm:text-base">
          No reviews yet. Be the first to review this product!
        </p>
      )}
{/* Recommended Products */}
<div className="py-8 px-4 sm:px-0">
  <h3 className="text-2xl font-semibold mb-4">Recommended Products</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {products.map((product) => (
      <div
        key={product.id}
        className="p-4 bg-white rounded shadow-sm relative"
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
            className="object-contain h-64 w-full mx-auto mb-4 cursor-pointer"
            priority={product.id === 3}
          />
        </Link>
        <Link href={`/productdetail/${product.id}`}>
          <h3 className="font-semibold hover:text-blue-600 cursor-pointer py-2 text-sm sm:text-base">
            {product.name}
          </h3>
        </Link>

        <div className="text-blue-700 font-bold text-sm sm:text-base mb-1">
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
    </AnimatedSection>
  );
};

export default ProductPage;
