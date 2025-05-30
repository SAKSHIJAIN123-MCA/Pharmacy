"use client";

import {
  Mail,
  Phone,
  Globe,
  Calendar,
  Facebook,
  Instagram,
  Youtube,
  X,
  Send,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-blue-600 text-white px-4 sm:px-6 md:px-8 pt-12 pb-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 sm:gap-8">
        {/* Left Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center space-x-4">
              <img
                src="/rabhas logo2.png"
                alt="Rabhas Logo"
                className="w-32 h-12 object-contain"
              />
            </div>
          </div>
          <p className="text-sm">
            We’re always ready to help — connect with our team for personalized
            assistance and quick support.
          </p>
          <div className="flex items-center gap-2 text-sm">
            <Phone size={16} />
            000 - 123 - 456789
          </div>
          <div className="flex items-center gap-2 text-sm break-all">
            <Mail size={16} />
            info@example.com
          </div>
          <div className="flex items-center gap-2 text-sm break-all">
            <Globe size={16} />
            www.example.com
          </div>
          <div className="flex gap-4 mt-2">
            <X className="cursor-pointer hover:opacity-80" />
            <Facebook className="cursor-pointer hover:opacity-80" />
            <Instagram className="cursor-pointer hover:opacity-80" />
            <Youtube className="cursor-pointer hover:opacity-80" />
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="text-white hover:underline">
                About
              </Link>
            </li>{" "}
            <li>
              <Link href="/blog" className="text-white hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-white hover:underline">
                Products
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-white hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-white hover:underline">
                Terms & Conditions
              </Link>
            </li>{" "}
            <li>
              <Link href="/cancel" className="text-white hover:underline">
                Cancellation & Refund Policy
              </Link>
            </li>{" "}
            <li>
              <Link href="/medicine" className="text-white hover:underline">
                Medicine Policy
              </Link>
            </li>{" "}
            <li>
              <Link
                href="/communication"
                className="text-white hover:underline"
              >
                Communication Policy
              </Link>
            </li>{" "}
          </ul>
        </div>

        {/* Help & Support */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Help & Support</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/support" className="text-white hover:underline">
                Support
              </Link>
            </li>{" "}
            <li>
              <Link href="/locate" className="text-white hover:underline">
                Locate Us
              </Link>
            </li>{" "}
            <li>
              <Link href="/contact" className="text-white hover:underline">
                Contact Us
              </Link>
            </li>{" "}
            <li>
              <Link href="/login" className="text-white hover:underline">
                Login
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-white hover:underline">
                FAQ
              </Link>
            </li>{" "}
          </ul>
        </div>

        {/* Services Cities */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Services Cities</h4>
          <ul className="space-y-2 text-sm">
            <li>New York</li>
            <li>Los Angeles</li>
            <li>Chicago</li>
            <li>Houston</li>
            <li>Washington</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Newsletter</h4>
          <p className="text-sm">
            Subscribe our Newsletter to get the latest news and insights
          </p>
          <div className="flex flex-col sm:flex-row w-full border bg-white rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 text-black outline-none w-full sm:w-auto"
            />
            <button className="bg-white text-black p-3 flex justify-center items-center">
              <Send className="h-4 w-4" />
            </button>
          </div>
          <p className="text-xs text-white">
            By subscribing, you accept the{" "}
            <span className="underline">Privacy Policy</span>
          </p>
          <div className="flex items-start gap-3 text-sm mt-2">
            <Calendar size={20} />
            <div>
              <div className="font-semibold">Monday–Saturday</div>
              <div>9.00 Am – 9.00 Pm</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20 mt-10 pt-4 flex flex-col sm:flex-row justify-between items-center text-sm gap-4 sm:gap-10 text-center sm:text-left">
        <p>© 2025 Medikure+ | Design by DesignThemes.</p>
      </div>
    </footer>
  );
}
