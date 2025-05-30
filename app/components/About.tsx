"use client";
import Image from "next/image";
import AnimatedSection from "../components/AnimatedSection"; 

export default function MedicalHeroSection() {
  return (
    <AnimatedSection>
    <section className="bg-white px-4 sm:px-6 md:px-16 py-16 sm:py-20">
      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-10 h-full">
        {/* Left Content */}
        <div className="flex flex-col justify-between w-full lg:max-w-xl">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-albert text-[#1c2025] leading-tight mb-6">
              Excellent Medical Professionals
              <br className="hidden sm:block" />
              With Significant Experience
            </h2>
            <p className="text-black-400 text-base leading-relaxed mb-6">
              At Rabhas Enterprises, we are committed to enhancing everyday
              wellness by providing reliable healthcare products and services.
              With a focus on quality, affordability, and customer satisfaction,
              we strive to make healthcare accessible to all. Our experienced
              team works tirelessly to ensure every order is handled with care
              and delivered on time.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-[#002469] transition w-full sm:w-auto">
              BOOK NOW
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 text-center">
            <div>
              <div className="flex justify-center mb-1">
                <Image
                  src="/insuranceicon.png"
                  alt="Happy Clients"
                  width={24}
                  height={24}
                />
              </div>
              <p className="text-[#003087] text-lg font-bold">200K +</p>
              <p className="text-gray-600 text-sm">Happy Clients</p>
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
              <p className="text-[#003087] text-lg font-bold">50K+</p>
              <p className="text-gray-600 text-sm">Orders Delivered</p>
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
              <p className="text-[#003087] text-lg font-bold">80+</p>
              <p className="text-gray-600 text-sm">Area Served</p>
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
              <p className="text-[#003087] text-lg font-bold">5 L</p>
              <p className="text-gray-600 text-sm">Medicines</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full max-w-[700px] h-64 sm:h-80 md:h-[400px] relative rounded-xl overflow-hidden">
          <Image
            src="/banner3.png"
            alt="Medical Professionals"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
    </AnimatedSection>
  );
}
