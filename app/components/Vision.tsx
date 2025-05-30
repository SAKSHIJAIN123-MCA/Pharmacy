"use client";
import AnimatedSection from "./AnimatedSection"; 

export default function OurVisionSection() {
  return (
    <AnimatedSection>
    <section className="w-full px-6 py-6">
      <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-center text-blue-500 mb-6">
          OUR VISION
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed max-w-3xl font-sans">
          At Rabhas Enterprises, we envision a world where healthcare is not a luxury, but a right. Our mission is to break barriers and provide every individual with access to high-quality, affordable health products.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed max-w-3xl font-sans">
          Through innovation, dedication, and an unwavering focus on wellness, we strive to build stronger, healthier communities. Whether it's advanced health solutions or everyday wellness products, we are committed to making a positive impact.
        </p>

        <blockquote className="italic text-blue-700 font-medium max-w-xl font-serif">
          “Health is not just a goal, it’s a journey we take together.”
        </blockquote>

        <div className="w-24 h-1 bg-blue-600 rounded-full mt-4"></div>
      </div>
    </section>
    </AnimatedSection>
  );
}
