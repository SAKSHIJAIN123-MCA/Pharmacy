import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Top Banner Image (Full Width) */}
      <div className="w-full">
        <img
          src="/Rabhas (2).png"
          alt="Team of doctors"
          className="w-full object-cover max-h-[300px] sm:max-h-[500px]"
        />
      </div>

      {/* Content Section */}
      <div className="py-8 sm:py-10 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          {/* Main Section */}
          <section className="bg-white px-4 sm:px-6 md:px-16 py-12 sm:py-16">
            <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-10 h-full">
              {/* Left Content */}
              <div className="flex flex-col justify-between w-full lg:max-w-xl">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold font-albert text-[#1c2025] leading-tight mb-6">
                    Excellent Medical Professionals
                    <br className="hidden sm:block" />
                    With Significant Experience
                  </h2>
                  <p className="text-black-400 text-sm sm:text-base leading-relaxed mb-6">
                    At Rabhas Enterprises, we are committed to enhancing
                    everyday wellness by providing reliable healthcare products
                    and services. With a focus on quality, affordability, and
                    customer satisfaction, we strive to make healthcare
                    accessible to all. Our experienced team works tirelessly to
                    ensure every order is handled with care and delivered on
                    time.
                  </p>
                  <button className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded font-semibold hover:bg-[#002469] transition w-full sm:w-auto">
                    BOOK NOW
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-10 text-center">
                  <div>
                    <div className="flex justify-center mb-1">
                      <Image
                        src="/insuranceicon.png"
                        alt="Happy Clients"
                        width={24}
                        height={24}
                      />
                    </div>
                    <p className="text-[#003087] text-base sm:text-lg font-bold">
                      200K+
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Happy Clients
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-center mb-1">
                      <Image
                        src="/houseicon.png"
                        alt="Orders Delivered"
                        width={24}
                        height={24}
                      />
                    </div>
                    <p className="text-[#003087] text-base sm:text-lg font-bold">
                      50K+
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Orders Delivered
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-center mb-1">
                      <Image
                        src="/houseicon.png"
                        alt="Area Served"
                        width={24}
                        height={24}
                      />
                    </div>
                    <p className="text-[#003087] text-base sm:text-lg font-bold">
                      80+
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Area Served
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-center mb-1">
                      <Image
                        src="/medicineicon.png"
                        alt="Medicines"
                        width={24}
                        height={24}
                      />
                    </div>
                    <p className="text-[#003087] text-base sm:text-lg font-bold">
                      5 L
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Medicines
                    </p>
                  </div>
                </div>
              </div>
              {/* Right Image */}
              <div className="w-full max-w-full sm:max-w-700px h-64 sm:h-80 md:h-[400px] relative rounded-xl overflow-hidden">
                <Image
                  src="/banner3.png"
                  alt="Medical Professionals"
                  fill
                />
              </div>
            </div>
          </section>

          {/* Extra Info Content */}
          <div className="px-4 sm:px-6 py-6 text-gray-800 text-xs sm:text-sm md:text-base space-y-3 sm:space-y-4">
            <p>
              Apollo Pharmacy is a subsidiary of Apollo Hospitals, a highly
              regarded pharmacy chain in India. It is the largest and first-ever
              Omni-Channel Pharmacy network in Asia, with a vast network of over
              5500 outlets strategically located in key locations across the
              country. The delivery service covers over 19000+ pin codes, making
              it highly accessible to people throughout India.
            </p>

            <p>
              The pharmacy is accredited with an International Quality
              Certification, which speaks to its commitment to providing
              authentic and reasonably priced medication round the clock. The
              24-hour pharmacies and home delivery network are designed to
              ensure customers' convenience, while the customer care is
              available at any time of the day.
            </p>

            <p>
              Quality is the foundation of Apollo Pharmacy's operations. Over
              the last two decades, the pharmacy has gained extensive experience
              in pharmacy operations management, and it is dedicated to offering
              the best services in the industry. The pharmacy is adequately
              stocked with a comprehensive range of medicines, over-the-counter
              (OTC), and fast-moving consumer goods (FMCG) products. The
              qualified and experienced staff are available to address all your
              needs.
            </p>

            <p>
              Apollopharmacy.in is a one-stop online destination with a vast
              range of over 70,000 products in various categories such as
              vitamins and supplements, baby care, personal care, health, and
              nutritional foods, and OTC. In addition, the pharmacy has over 400
              Apollo Branded products available in categories like vitamins and
              supplements, health food, oral care, skincare, among others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
