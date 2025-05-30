import Link from "next/link";

export default function CartPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-16 sm:py-26">
        <div className="absolute inset-0 opacity-10 bg-[url('/bg-pattern.png')] bg-cover bg-center pointer-events-none" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Your Shopping Cart</h2>
          <p className="text-xs sm:text-sm">
            <a href="/" className="text-gray-300 hover:text-white">
              Home
            </a>{" "}
            / Your Shopping Cart
          </p>
        </div>
      </section>

      {/* Cart Content */}
      <section className="flex flex-col items-center justify-center py-16 sm:py-35 px-4 text-center">
        <h1 className="text-xl sm:text-2xl font-semibold mb-4">Your cart is empty</h1>
        {/* Button with Link */}
        <Link href="/products">
          <button className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition text-sm sm:text-base">
            CONTINUE SHOPPING
          </button>
        </Link>

        <p className="mt-6 text-xs sm:text-sm max-w-xs sm:max-w-md">
          <span className="font-semibold">Have an account?</span>{" "}
          <a href="/login" className="text-blue-700 underline">
            Log in
          </a>{" "}
          to check out faster.
        </p>
      </section>
    </main>
  );
}
