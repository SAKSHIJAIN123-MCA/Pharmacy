"use client";
import Image from "next/image";

export default function HealthBanners() {
  return (
    <section className="px-6 py-10 bg-white space-y-6">
      {/* First Banner */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between relative overflow-hidden text-white min-h-[180px]">
        <div className="z-10 max-w-lg">
          <h2 className="text-2xl font-bold mb-2">Ask anything about your health.</h2>
          <p className="text-sm mb-4">Get trusted answers directly from Apollo.</p>
          <button className="bg-black text-white px-4 py-2 rounded-lg font-semibold text-sm">
            ✦ Ask Apollo<sup className="text-xs">beta</sup>
          </button>
        </div>
        <div className="absolute right-0 bottom-0 hidden md:block z-0">
          <Image
            src="/doctor.jpg" 
            alt="Doctor"
            width={500}
            height={200}
          />
        </div>
        <div className="absolute inset-0 z-0 opacity-20">
          {/* Optional background icons using <svg> or patterned divs */}
        </div>
      </div>

      {/* Second Banner */}
      <div className="bg-[#f1ba98] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between min-h-[180px]">
        <div className="text-left max-w-xl">
          <h2 className="text-lg font-semibold text-[#d45b22]">
            Be in charge
            <span className="text-[#4d2c1d]"> from planning your pregnancy to parenting.</span>
          </h2>
          <div className="flex gap-8 mt-4 text-center text-sm">
            <div>
              <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mb-2 shadow-md">
                <Image src="/ba2.avif" alt="MomVerse" width={30} height={30} />
              </div>
              <p>Open<br />MomVerse</p>
            </div>
            <div>
              <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mb-2 shadow-md">
                <Image src="/bp.avif" alt="Choose stage" width={30} height={30} />
              </div>
              <p>Choose<br />your stage</p>
            </div>
            <div>
              <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mb-2 shadow-md">
                <Image src="/cream.avif" alt="Guide ready" width={30} height={30} />
              </div>
              <p>Your custom<br />guide is ready</p>
            </div>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="bg-[#f15b22] hover:bg-[#e14e1a] text-white px-6 py-2 rounded-lg font-semibold">
            Begin Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}
