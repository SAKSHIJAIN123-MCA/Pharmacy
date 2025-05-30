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
    console.log("Add to cart:", productId);
    router.push("/cart");
  };

  return (
    <AnimatedSection>
    <div className="max-w-8xl mx-auto px-4 py-8">
      {/* Product Header */}
      <div className="bg-blue-600 text-white px-6 py-10 rounded text-center">
        <h1 className="text-2xl md:text-3xl font-bold">Veterinary Drugs</h1>
        <p className="text-base md:text-xl">All &gt; Veterinary Drugs</p>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        <Image
          src="/pain relief spray.webp"
          alt="Veterinary Drugs"
          width={600}
          height={400}
          className="rounded w-full h-auto object-contain"
        />

        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-2">Veterinary Drugs</h2>
          <p className="text-lg md:text-xl text-red-500 font-semibold">
            ₹850.00{" "}
            <span className="line-through text-gray-500 text-sm">
              ₹1,100.00
            </span>
          </p>
          <p className="text-sm text-orange-600">
            Trusted by 100+ veterinary clinics across India
          </p>
          <p className="text-gray-700 mt-4 text-sm md:text-base">
            High-quality veterinary medications to treat infections, inflammation, and common diseases in animals. Safe, effective, and vet-approved.
          </p>
          <ul className="mt-4 space-y-1 text-gray-700 text-sm md:text-base">
            <li><strong>Availability:</strong> In stock</li>
            <li><strong>Vendor:</strong> animal-healthcare</li>
            <li><strong>Delivery:</strong> 2-4 working days</li>
            <li><strong>Free shipping</strong> on orders over ₹799</li>
          </ul>
          <button
            onClick={() => router.push("/cart")}
            className="mt-4 w-full md:w-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs
        value={tab}
        onChange={handleTabChange}
        className="mb-4 overflow-x-auto"
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab label="Description" />
        <Tab label="Additional Information" />
        <Tab label="Reviews" />
      </Tabs>
      {tab === 0 && (
        <p className="text-gray-700 text-sm md:text-base">
          Our veterinary drugs are manufactured using top-grade formulations to ensure safety and effectiveness in animals. Suitable for both large and small animals, they help treat bacterial infections, inflammation, and post-surgery recovery.
        </p>
      )}
      {tab === 1 && (
        <p className="text-gray-700 text-sm md:text-base">
          Dosage: As prescribed by a licensed veterinarian.
          Storage: Store in a cool, dry place. Keep out of reach of children.
          For animal use only. Includes antibiotics, NSAIDs, and multivitamin blends.
        </p>
      )}
      {tab === 2 && (
        <p className="text-gray-700 text-sm md:text-base">
          “Worked wonders for my Labrador's skin infection!” – Ravi.
          “Reliable meds, quick delivery.” – Priya Vet Clinic.
        </p>
      )}

      {/* Recommended Products */}
      <div className="py-8">
        <h3 className="text-xl md:text-2xl font-semibold mb-4">
          Recommended Products
        </h3>
        <div className="overflow-x-auto">
          <div className="flex space-x-4 md:space-x-6 px-4 md:px-8 py-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="min-w-[250px] md:min-w-[320px] p-4 bg-white rounded shadow-sm relative flex-shrink-0"
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
                  <h3 className="font-semibold hover:text-blue-600 cursor-pointer py-2 text-sm md:text-base">
                    {product.name}
                  </h3>
                </Link>
                <div className="text-blue-700 font-bold mb-1 text-sm md:text-base">
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
                  className="w-full mt-2 bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition text-sm md:text-base"
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
