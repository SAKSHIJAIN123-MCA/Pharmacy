"use client";

import React, { useState } from "react";
import Link from 'next/link';

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Reset link sent to ${email}`);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <div className="w-full bg-gradient-to-b from-blue-900 to-blue-600 text-white py-22">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Account</h1>
          <p className="mt-2">Home &gt; Account</p>
        </div>
      </div>

      <div className="bg-blue-50 p-20 rounded shadow-md max-w-md w-full mt-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Reset your password</h2>
        <p className="text-gray-600 mb-6">
          We will send you an email to reset your password
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-6 py-2 mb-4 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-2 rounded font-semibold"
          >
            SUBMIT
          </button>
        </form>
        <Link href="/login">
          <button className="mt-4 text-sm text-gray-700 hover:underline">
            Cancel
          </button>
        </Link>
      </div>
    </div>
  );
}
