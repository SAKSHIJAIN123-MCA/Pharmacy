
"use client";
import AnimatedSection from "../components/AnimatedSection"; 

export default function ContactUs() {
  return (
    <AnimatedSection>
    <div className="w-full bg-white py-10 sm:py-12 px-4 sm:px-6 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 sm:gap-12">
        {/* Left Side */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-500 mb-6 sm:mb-6">
            Contact Us
          </h2>
          <p className="text-gray-800 mb-1 font-medium text-sm sm:text-base">
            Rabhas Enterprises
          </p>
          <p className="text-gray-700 text-sm sm:text-base">
            #19, Bishop Gardens,
            <br />
            Raja Annamalaipuram,
            <br />
            Chennai, Tamil Nadu - 600028
          </p>

          <div className="mt-6 space-y-8 text-gray-800 text-sm sm:text-base">
            <div>
              <p>
                For queries related to Online orders
                <br />
                Please contact us at:{" "}
                <a
                  className="text-blue-500 underline break-all"
                  href="mailto:contactusnow@apollopharmacy.org"
                >
                  contactusnow@rabhasenterprises.org
                </a>
              </p>
            </div>
            <div>
              <p>
                For queries related to Rabhas Enterprises Store experience
                <br />
                Please contact us at:{" "}
                <a
                  className="text-blue-500 underline break-all"
                  href="mailto:customerservice@apollopharmacy.org"
                >
                  customerservice@rabhasenterprises.org
                </a>
              </p>
            </div>
            <div>
              <p>
                For Corporate and Bulk inquiries
                <br />
                Please contact us at:{" "}
                <a
                  className="text-blue-500 underline break-all"
                  href="mailto:customerservice@apollopharmacy.org"
                >
                  customerservice@rabhasenterprises.org
                </a>
              </p>
            </div>
            <div>
              <p>
                For launching New Brands on Rabhas Enterprises
                <br />
                Please contact us at:{" "}
                <a
                  className="text-blue-500 underline break-all"
                  href="mailto:brandlisting@apollopharmacy.org"
                >
                  brandlisting@rabhasenterprises.org
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-500 mb-3 sm:mb-4">
            Get In Touch With Our Team
          </h2>
          <p className="text-gray-700 mb-5 sm:mb-6 text-sm sm:text-base">
            Need Help? Our team is here to assist you with any questions or
            support you need. Reach out to us anytime — we're just a message
            away.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name *"
              className="w-full bg-blue-50 p-3 sm:p-4 border border-gray-200 rounded text-sm sm:text-base"
            />
            <input
              type="email"
              placeholder="Email *"
              className="w-full bg-blue-50 p-3 sm:p-4 border border-gray-200 rounded text-sm sm:text-base"
            />
            <input
              type="tel"
              placeholder="Phone number *"
              className="w-full bg-blue-50 p-3 sm:p-4 border border-gray-200 rounded text-sm sm:text-base"
            />
            <textarea
              placeholder="Comment *"
              rows={5}
              className="w-full bg-blue-50 p-3 sm:p-2 border border-gray-200 rounded text-sm sm:text-base"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded uppercase tracking-wide text-sm sm:text-base"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-300 pt-12 text-center mt-12">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">
          Join Now For Exclusive Offers
        </h3>
        <p className="text-sm mb-4 text-gray-600">
          Unlock the world of wellness with exciting deals and informative content
        </p>

        <form className="flex flex-col sm:flex-row justify-center items-center gap-2">
          <input
            type="email"
            placeholder="Enter your email address"
            className="border border-gray-300 px-4 py-2 rounded w-full sm:w-64"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-full sm:w-auto"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
    </AnimatedSection>
  );
}
