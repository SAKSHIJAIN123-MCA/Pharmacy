"use client";
import AnimatedSection from "../components/AnimatedSection";

export default function HowWeWorkSection() {
  return (
    <AnimatedSection>
      <section className="bg-white px-4 sm:px-6 md:px-16 py-12 sm:py-12">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-7">
          <h2 className="text-3xl font-bold text-blue-600 mb-8">HOW WE WORK</h2>

          <p className="text-gray-700 max-w-4xl text-base sm:text-lg leading-relaxed">
            Our platform is designed to provide you a seamless and trustworthy
            shopping experience focused on healthcare products. From easy user
            registration to secure login, we ensure that your journey is smooth
            and hassle-free.
            <br />
            <br />
            Browse through a wide range of carefully curated products with
            detailed descriptions and clear images, making it easier for you to
            choose what suits your needs. Adding items to your cart is simple
            and intuitive, while our streamlined checkout process offers
            multiple secure payment options for your convenience.
            <br />
            <br />
            Pharmacies can also set up profiles and manage their inventories
            effectively, connecting you with trusted local suppliers. Our
            commitment to transparency, data security, and responsive customer
            support means you always feel confident with every order you place.
            <br />
            <br />
            Additionally, stay informed and empowered by reading our regularly
            updated healthcare blog, where we share valuable insights, tips, and
            industry news to help you make better health decisions.
            <br />
            <br />
            At every step, we prioritize your satisfaction, delivering timely
            updates and after-sales support to ensure your experience with us is
            nothing short of excellent.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10 w-full">
            {/* Step 1 */}
            <div className="border border-gray-300 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-blue-700 font-semibold text-xl mb-3">
                1. Register Account
              </h3>
              <p className="text-gray-600 text-sm">
                New users create an account to access personalized features and
                offers.
              </p>
            </div>

            {/* Step 2 */}
            <div className="border border-gray-300 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-blue-700 font-semibold text-xl mb-3">
                2. Login Securely
              </h3>
              <p className="text-gray-600 text-sm">
                Registered users login securely to manage their orders and
                profile.
              </p>
            </div>

            {/* Step 3 */}
            <div className="border border-gray-300 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-blue-700 font-semibold text-xl mb-3">
                3. Browse Products
              </h3>
              <p className="text-gray-600 text-sm">
                Explore our wide range of products with detailed descriptions
                and images.
              </p>
            </div>

            {/* Step 4 */}
            <div className="border border-gray-300 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-blue-700 font-semibold text-xl mb-3">
                4. Add to Cart
              </h3>
              <p className="text-gray-600 text-sm">
                Select your favorite products and add them to your shopping cart
                easily.
              </p>
            </div>

            {/* Step 5 */}
            <div className="border border-gray-300 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-blue-700 font-semibold text-xl mb-3">
                5. Checkout
              </h3>
              <p className="text-gray-600 text-sm">
                Securely complete your purchase with multiple payment options
                and address confirmation.
              </p>
            </div>

            {/* Step 6 */}
            <div className="border border-gray-300 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-blue-700 font-semibold text-xl mb-3">
                6. View Cart & Orders
              </h3>
              <p className="text-gray-600 text-sm">
                Easily review your cart and track orders anytime from your
                dashboard.
              </p>
            </div>

            {/* Step 7 */}
            <div className="border border-gray-300 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-blue-700 font-semibold text-xl mb-3">
                7. Pharmacy Setup
              </h3>
              <p className="text-gray-600 text-sm">
                Pharmacies create profiles and manage their product listings to
                serve customers better.
              </p>
            </div>

            {/* Step 8 */}
            <div className="border border-gray-300 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-blue-700 font-semibold text-xl mb-3">
                8. Read Our Blog
              </h3>
              <p className="text-gray-600 text-sm">
                Stay informed with our healthcare articles and industry updates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
