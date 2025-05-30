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
    console.log("Adding product to cart:", productId);
    router.push("/cart");
  };

  return (
    <AnimatedSection>
    <div className="w-full overflow-x-hidden">
      {/* Product Header */}
      <div className="w-full bg-blue-600 text-white p-8 md:p-20 text-center">
        <h1 className="text-2xl md:text-4xl font-bold">Multivitamin Tablets</h1>
        <p className="text-lg md:text-xl mt-2">All &gt; Multivitamin Tablets</p>
      </div>

      {/* Product Details */}
      <div className="w-full grid md:grid-cols-2 gap-8 px-4 md:px-20 py-8">
        <Image
          src="/multi vitamin tablets.webp"
          alt="Multivitamin Tablets"
          width={600}
          height={400}
          className="w-full max-w-full h-auto rounded"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2">Multivitamin Tablets</h2>
          <p className="text-xl text-red-500 font-semibold">
            ₹1,200.00{" "}
            <span className="line-through text-gray-500 text-sm">₹1,500.00</span>
          </p>
          <p className="text-sm text-orange-600 mt-1">
            40 packs sold in the last 24 hours
          </p>
          <p className="text-gray-700 mt-4">
            Daily multivitamin supplement to support immunity, energy, and
            overall well-being. Packed with essential nutrients and antioxidants.
          </p>
          <ul className="mt-4 space-y-1 text-gray-700">
            <li><strong>Availability:</strong> In stock</li>
            <li><strong>Vendor:</strong> health-plus-pharma</li>
            <li><strong>Delivery:</strong> 3-5 working days</li>
            <li><strong>Free shipping</strong> on orders over ₹499</li>
          </ul>
          <button
            onClick={() => router.push("/cart")}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 md:px-20">
        <Tabs value={tab} onChange={handleTabChange} className="mb-4">
          <Tab label="Description" />
          <Tab label="Additional Information" />
          <Tab label="Reviews" />
        </Tabs>
        {tab === 0 && (
          <p className="text-gray-700">
            These multivitamin tablets are scientifically formulated to meet the
            daily nutritional needs of men and women. They help in boosting energy,
            enhancing immunity, and maintaining overall health. Suitable for daily use.
          </p>
        )}
        {tab === 1 && (
          <p className="text-gray-700">
            Contains Vitamins A, B-complex, C, D, E, and essential minerals like
            Zinc, Iron, and Magnesium. Suggested use: 1 tablet daily after a meal.
            Consult a physician if you are pregnant or taking other medications.
          </p>
        )}
        {tab === 2 && (
          <p className="text-gray-700">
            Customers love it! “My energy levels are up!” — Anita. “Easy to digest
            and very effective” — Rohit.
          </p>
        )}
      </div>

      {/* Recommended Products */}
      <div className="w-full py-8 px-4 md:px-20">
        <h3 className="text-2xl font-semibold mb-4">Recommended Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full bg-white rounded shadow-sm p-4"
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
                  className="object-contain h-60 w-full mb-4 cursor-pointer"
                  priority={product.id === 3}
                />
              </Link>
              <Link href={`/productdetail/${product.id}`}>
                <h3 className="font-semibold hover:text-blue-600 cursor-pointer py-2">
                  {product.name}
                </h3>
              </Link>
              <div className="text-blue-700 font-bold mb-1">
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
