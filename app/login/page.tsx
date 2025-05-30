"use client";

import React, { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AnimatedSection from "../components/AnimatedSection"; 

export default function AccountSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Login failed");
        return;
      }

      // Login successful
      alert("Login successful!");
      router.push("/account/profile");
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <AnimatedSection>
    <>
      {/* ─── Hero Banner ─────────────────────────────────────── */}
      <section className="h-56 sm:h-64 w-full bg-blue-600 flex flex-col justify-center items-center text-white px-4 sm:px-0">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Account</h1>
        <nav className="text-xs sm:text-sm text-gray-200">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          <span className="mx-1">›</span> Account
        </nav>
      </section>

      {/* ─── Sign-in box ─────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-md w-full mx-auto bg-[#f1f9fd] rounded shadow-sm px-6 sm:px-8 py-10 sm:py-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-8">Sign In</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 rounded p-2 placeholder-gray-400 text-sm"
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border border-gray-300 rounded p-2 placeholder-gray-400 text-sm"
              />
            </div>

            <button
              type="submit"
              className="block w-full bg-blue-600 text-white py-2 rounded font-semibold tracking-wide hover:bg-[#002a63] transition text-sm sm:text-base"
            >
              SIGN IN
            </button>
          </form>

          {/* Divider line */}
          <hr className="my-8 border-gray-300" />

          <div className="flex flex-col sm:flex-row justify-between text-sm font-semibold gap-2 sm:gap-0">
            <Link href="/forgotpassword" className="hover:underline text-center sm:text-left">
              Forgot Your Password?
            </Link>
            <Link href="/signup" className="hover:underline text-center sm:text-right">
              Sign Up
            </Link>
          </div>
        </div>
      </section>
    </>
    </AnimatedSection>
  );
}
