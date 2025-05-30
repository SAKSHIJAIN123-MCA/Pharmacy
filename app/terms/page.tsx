export default function Terms() {
  return (
    <div className="bg-gray-50 min-h-screen py-8 px-6 sm:px-8 md:px-12 lg:px-20">
      {/* Top Banner Image (Full Width - ignore container padding) */}
      <div className="w-screen -mx-6 sm:-mx-8 md:-mx-12 lg:-mx-20 py-6">
        <img
          src="/Rabhas (5).png"
          alt="Team of doctors"
          className="w-full object-cover max-h-[1000px] mb-6"
        />
      </div>

      <h1 className="text-2xl sm:text-2xl font-bold text-center mb-8">Terms & Conditions</h1>
      
      <p className="mb-3 text-sm sm:text-base">
        These Terms and Conditions ("Terms") govern your use of Cheap Medicine
        Shop's website and services. By accessing or using our site, you agree
        to be bound by these Terms.
      </p>

      <h2 className="text-lg sm:text-xl font-semibold mb-1">1. Acceptance of Terms</h2>
      <p className="mb-3 text-sm sm:text-base">
        By using this website, you acknowledge that you have read, understood,
        and agreed to be bound by these Terms and our Privacy Policy.
      </p>

      <h2 className="text-lg sm:text-xl font-semibold mb-1">2. Eligibility</h2>
      <p className="mb-3 text-sm sm:text-base">
        You must be at least 18 years old or have legal parental or guardian
        consent to use this site. We do not knowingly collect data from
        individuals under 18.
      </p>

      <h2 className="text-lg sm:text-xl font-semibold mb-1">3. User Responsibilities</h2>
      <p className="mb-3 text-sm sm:text-base">
        You agree not to misuse the website, infringe on the rights of others,
        or use the platform for any unlawful activity. You are responsible for
        maintaining the confidentiality of your login credentials.
      </p>

      <h2 className="text-lg sm:text-xl font-semibold mb-1">4. Product Descriptions</h2>
      <p className="mb-3 text-sm sm:text-base">
        We strive to provide accurate product descriptions. However, we do not
        warrant that the product details or content are error-free, complete, or
        current.
      </p>

      <h2 className="text-lg sm:text-xl font-semibold mb-1">
        5. Pricing and Availability
      </h2>
      <p className="mb-3 text-sm sm:text-base">
        Prices and availability of products are subject to change without
        notice. We reserve the right to cancel orders if a product is listed at
        an incorrect price.
      </p>

      <h2 className="text-lg sm:text-xl font-semibold mb-1">6. Intellectual Property</h2>
      <p className="mb-3 text-sm sm:text-base">
        All content on this site, including text, graphics, logos, and software,
        is the property of Cheap Medicine Shop or its content suppliers and
        protected by copyright laws.
      </p>

      <h2 className="text-lg sm:text-xl font-semibold mb-1">7. Limitation of Liability</h2>
      <p className="mb-3 text-sm sm:text-base">
        Cheap Medicine Shop shall not be liable for any indirect, incidental, or
        consequential damages arising out of the use or inability to use our
        services or website.
      </p>

      <h2 className="text-lg sm:text-xl font-semibold mb-1">8. Termination</h2>
      <p className="mb-3 text-sm sm:text-base">
        We reserve the right to terminate your access to the site without notice
        if we believe you have violated any of these Terms.
      </p>

      <h2 className="text-lg sm:text-xl font-semibold mb-1">9. Changes to Terms</h2>
      <p className="mb-3 text-sm sm:text-base">
        We may revise these Terms at any time without notice. By continuing to
        use our services, you agree to be bound by the updated Terms.
      </p>

      <h2 className="text-lg sm:text-xl font-semibold mb-1">10. Governing Law</h2>
      <p className="mb-3 text-sm sm:text-base">
        These Terms are governed by and construed in accordance with the laws of
        your country or region. Disputes will be subject to the jurisdiction of
        the courts in your locality.
      </p>

      <h2 className="text-lg sm:text-xl font-semibold mb-1">Contact Information</h2>
      <p className="mb-3 text-sm sm:text-base">
        If you have any questions about these Terms, please contact us at
        info@example.com.
      </p>

      <div className="border-t border-gray-300 pt-12 text-center mt-12">
        <h3 className="text-base sm:text-lg font-semibold mb-2 text-black-700">
          Join Now For Exclusive Offers
        </h3>
        <p className="text-xs sm:text-sm mb-4 text-gray-600">
          Unlock the world of wellness with exciting deals and informative
          content
        </p>

        <form className="flex flex-col sm:flex-row justify-center items-center gap-2">
          <input
            type="email"
            placeholder="Enter your email address"
            className="border border-gray-300 px-4 py-2 rounded w-full sm:w-64 text-sm"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-full sm:w-auto text-sm"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
