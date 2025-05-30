
import AnimatedSection from "../components/AnimatedSection"; 

export default function Medicine() {
  return (
    <AnimatedSection>
    <div className="bg-gray-50 min-h-screen py-8 px-6 sm:px-8 md:px-12 lg:px-20">
      {/* Top Banner Image (Full Width - ignore container padding) */}
      <div className="w-screen -mx-6 sm:-mx-8 md:-mx-12 lg:-mx-20 py-6">
        <img
          src="/Rabhas (7).png"
          alt="Team of doctors"
          className="w-full object-cover max-h-[1000px] mb-6"
        />
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8">
        Medicine Policy
      </h1>
      <p className="mb-3 text-sm sm:text-base">
        Cheap Medicine Shop is committed to ensuring the safe and legal
        distribution of pharmaceutical products. The following policies outline
        our responsibilities and your obligations when purchasing medicines from
        our website.
      </p>

      <h3 className="font-semibold mb-1 text-base sm:text-lg">Prescription Requirement</h3>
      <p className="mb-4 text-sm sm:text-base">
        Some medicines listed on our platform require a valid prescription from
        a licensed medical practitioner. You must upload a valid prescription
        during checkout or email it to us as requested. Orders without required
        prescriptions will not be processed.
      </p>

      <h3 className="font-semibold mb-1 text-base sm:text-lg">Authenticity and Sourcing</h3>
      <p className="mb-4 text-sm sm:text-base">
        All medicines available on Cheap Medicine Shop are sourced from licensed
        manufacturers and distributors. We guarantee the authenticity, safety,
        and quality of the products we supply.
      </p>

      <h3 className="font-semibold mb-1 text-base sm:text-lg">Storage and Handling</h3>
      <p className="mb-4 text-sm sm:text-base">
        We store and transport medicines in compliance with recommended
        guidelines to maintain their efficacy and safety. However, customers are
        responsible for proper storage after delivery.
      </p>

      <h3 className="font-semibold mb-1 text-base sm:text-lg">Delivery Restrictions</h3>
      <p className="mb-4 text-sm sm:text-base">
        Certain medicines may be restricted in some regions due to local laws
        and regulations. We reserve the right to cancel such orders and issue
        refunds accordingly.
      </p>

      <h3 className="font-semibold mb-1 text-base sm:text-lg">Advisory Disclaimer</h3>
      <p className="mb-4 text-sm sm:text-base">
        The content on our website, including descriptions of medicines, is for
        informational purposes only and should not be considered a substitute
        for professional medical advice. Always consult your physician or
        qualified healthcare provider before starting any medication.
      </p>

      <h3 className="font-semibold mb-1 text-base sm:text-lg">Liability</h3>
      <p className="mb-4 text-sm sm:text-base">
        Cheap Medicine Shop is not liable for any adverse effects, allergic
        reactions, or complications arising from the use of medicines sold on
        our platform. Usage is at your own risk and should be under proper
        medical supervision.
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
    </AnimatedSection>
  );
}
