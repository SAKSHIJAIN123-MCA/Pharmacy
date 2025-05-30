export default function Company() {
  return (
    <div className="bg-white min-h-screen text-gray-800">
      {/* Header Section */}
      <div className="bg-[#f5f7fa] py-12 px-4 sm:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4">
          Welcome to Rabhas Enterprises
        </h1>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600">
          Empowering Healthcare with Integrity, Innovation, and Impact. We’re more than a provider — we’re a partner in your wellness journey.
        </p>
      </div>

      {/* Mission / Vision / Values Section */}
      <section className="py-12 px-4 sm:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-blue-700 mb-3">Our Mission</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              To deliver high-quality, affordable healthcare products and services that improve lives and foster community wellness across India.
            </p>
          </div>
          <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-blue-700 mb-3">Our Vision</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              To be a trusted healthcare brand recognized for customer focus, innovation, and ethical practices in all we do.
            </p>
          </div>
          <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-blue-700 mb-3">Our Values</h2>
            <ul className="text-gray-600 text-sm sm:text-base list-disc list-inside text-left">
              <li>Integrity in every transaction</li>
              <li>Commitment to quality and safety</li>
              <li>Customer-first mindset</li>
              <li>Innovation for better health</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="bg-gray-100 py-10 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-700 mb-6">Why Choose Us?</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-2xl font-bold text-blue-700">200K+</p>
              <p className="text-sm text-gray-600">Satisfied Customers</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-700">50K+</p>
              <p className="text-sm text-gray-600">Orders Fulfilled</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-700">80+</p>
              <p className="text-sm text-gray-600">Service Locations</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-700">500K+</p>
              <p className="text-sm text-gray-600">Medicines Delivered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info / Philosophy */}
      <section className="py-12 px-4 sm:px-8 max-w-5xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold text-blue-700">Our Company</h2>
        <p className="text-gray-700 text-sm sm:text-base">
          Founded with a deep passion for accessible healthcare, Rabhas Enterprises is dedicated to bridging the gap between people and reliable medical solutions. Whether you are ordering essential medicines or wellness products, we ensure a smooth, transparent, and prompt experience.
        </p>
        <p className="text-gray-700 text-sm sm:text-base">
          We operate with a clear purpose: to put our customers first, always. Our support teams and logistics channels work in harmony to meet the highest standards. Backed by an expert team and a broad product base, we are steadily redefining how healthcare reaches homes.
        </p>
        <p className="text-gray-700 text-sm sm:text-base">
          Our continuous investment in technology, training, and partnerships ensures that we stay ahead in an ever-evolving landscape while staying rooted in our founding principles of trust and care.
        </p>
      </section>
    </div>
  );
}
