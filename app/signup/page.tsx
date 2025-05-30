"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export default function Signup() {
  const [form, setForm] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Signup failed");
        return;
      }

      alert("Account created successfully! Please login.");
      router.push("/login");
    } catch (error) {
      console.error("Signup error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="h-52 sm:h-64 w-full bg-blue-600 flex flex-col justify-center items-center text-white px-4 sm:px-0">
        <h1 className="text-3xl sm:text-4xl font-bold">Create Account</h1>
        <p className="mt-3 sm:mt-4 text-lg sm:text-xl text-center">
          <Link href="/">Home</Link> &gt; Create Account
        </p>
      </div>

      <div className="max-w-md w-full mx-auto bg-blue-50 mt-10 sm:mt-12 mb-16 sm:mb-20 p-6 sm:p-8 rounded shadow">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">Sign Up</h2>
        <p className="text-center mb-6 text-xs sm:text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 font-semibold underline">
            Sign In
          </Link>
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstname"
            placeholder="First name"
            value={form.firstname}
            onChange={handleChange}
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded text-sm sm:text-base"
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last name"
            value={form.lastname}
            onChange={handleChange}
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded text-sm sm:text-base"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded text-sm sm:text-base"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full p-3 mb-6 border border-gray-300 rounded text-sm sm:text-base"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 font-semibold rounded hover:bg-blue-900 text-sm sm:text-base"
          >
            CREATE
          </button>
        </form>
      </div>
    </div>
  );
}
