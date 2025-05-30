"use client";

import Link from "next/link";
import {
  FaShippingFast,
  FaMapMarkerAlt,
  FaBoxOpen,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Support() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Header */}
      <div className="bg-blue-700 text-white text-center py-10 px-4">
        <h1 className="text-3xl font-bold mb-2">Support Center</h1>
        <p className="text-sm sm:text-base">
          Need help? We’re here to support you every step of the way.
        </p>
      </div>

      {/* Help Options */}
      <section className="max-w-6xl mx-auto py-10 px-4 sm:px-8 grid md:grid-cols-3 gap-6 text-center">
        {/* Email Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h2 className="text-lg font-semibold text-blue-700 mb-2">Email Us</h2>
          <p className="text-sm text-gray-600">
            Feel free to reach out to our support team via email for inquiries.
          </p>
          <p className="text-blue-700 font-medium mt-2">support@rabhas.com</p>
        </div>

        {/* Store Address Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h2 className="text-lg font-semibold text-blue-700 mb-2">
            Visit Our Store
          </h2>
          <p className="text-sm text-gray-600">We're located at:</p>
          <p className="text-blue-700 font-medium mt-2">
            123, Rabhas Street, Gwalior, India
          </p>
        </div>

        {/* Add To Cart Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h2 className="text-lg font-semibold text-blue-700 mb-2">
            Add To Cart
          </h2>
          <p className="text-sm text-gray-600">
            {" "}
            Discover how to easily add items to your cart, save them for later,
            and manage your shopping list with ease.
          </p>
        </div>
      </section>

      {/* Help Topics Section (Replacing FAQ) */}
      <section className="bg-white py-12 px-4 sm:px-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center text-blue-700 mb-10">
          Explore Help Topics
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-gray-50 p-6 rounded shadow hover:shadow-md transition">
            <FaShippingFast className="text-3xl text-blue-600 mx-auto mb-3" />
            <h3 className="font-medium text-gray-700 mb-1">Shipping Info</h3>
            <p className="text-sm text-gray-500">Track and manage deliveries</p>
          </div>
          <div className="bg-gray-50 p-6 rounded shadow hover:shadow-md transition">
            <FaMapMarkerAlt className="text-3xl text-blue-600 mx-auto mb-3" />
            <h3 className="font-medium text-gray-700 mb-1">Store Locations</h3>
            <p className="text-sm text-gray-500">
              Find our store nearest to you
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded shadow hover:shadow-md transition">
            <FaBoxOpen className="text-3xl text-blue-600 mx-auto mb-3" />
            <h3 className="font-medium text-gray-700 mb-1">Order History</h3>
            <p className="text-sm text-gray-500">View your previous orders</p>
          </div>
          <div className="bg-gray-50 p-6 rounded shadow hover:shadow-md transition">
            <FaPhoneAlt className="text-3xl text-blue-600 mx-auto mb-3" />
            <h3 className="font-medium text-gray-700 mb-1">Customer Support</h3>
            <p className="text-sm text-gray-500">
              Get in touch with our support team
            </p>
          </div>
        </div>
      </section>

      {/* Contact Prompt */}
      <section className="text-center py-12 px-4 sm:px-8 bg-gray-100">
        <h2 className="text-xl font-semibold text-blue-700 mb-2">
          Still have questions?
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Reach out to us and we’ll respond as quickly as possible.
        </p>
        <Link href="/contact" passHref>
          <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition">
            Contact Support
          </button>
        </Link>
      </section>
    </div>
  );
}
