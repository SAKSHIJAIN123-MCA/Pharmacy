"use client";

import { FaMapMarkedAlt, FaClock, FaEnvelope, FaPhone } from "react-icons/fa";
import Link from "next/link";
export default function LocateUs() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Header */}
      <div className="bg-blue-700 text-white text-center py-12 px-4">
        <h1 className="text-4xl font-bold mb-2">Locate Our Store</h1>
        <p className="text-sm sm:text-base">
          Visit us in person and explore our exclusive collections.
        </p>
      </div>

      {/* Map & Info Section */}
      <section className="max-w-6xl mx-auto py-12 px-4 sm:px-8 grid md:grid-cols-2 gap-8 items-center">
        {/* Google Map Embed */}
        <div className="rounded-lg overflow-hidden shadow-lg border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.3921459999997!2d78.1828!3d26.2183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c3c3c3c3c3c3%3A0x3c3c3c3c3c3c3c3c!2sGwalior%2C%20Madhya%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1717075678899!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="w-full"
          ></iframe>
        </div>

        {/* Store Info */}
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <FaMapMarkedAlt className="text-2xl text-blue-700 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Store Address</h3>
              <p className="text-sm text-gray-600">
                Rabhas Enterprises, Gwalior, India
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FaClock className="text-2xl text-blue-700 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Working Hours</h3>
              <p className="text-sm text-gray-600">
                Monday – Saturday: 10:00 AM – 8:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FaPhone className="text-2xl text-blue-700 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="text-sm text-gray-600">+91 98765 43210</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FaEnvelope className="text-2xl text-blue-700 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-sm text-gray-600">hello@rabhas.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Visit */}
      <section className="text-center py-12 px-4 sm:px-8 bg-white">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3">
          We’d love to see you!
        </h2>
        <p className="text-sm text-gray-600 mb-6 max-w-xl mx-auto">
          Whether you're browsing, buying, or just saying hello — our store is
          open and waiting for you with warm smiles and a cup of coffee.
        </p>
        <Link href="/contact" passHref>
          <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition">
            Plan Your Visit
          </button>
        </Link>
      </section>
    </div>
  );
}
