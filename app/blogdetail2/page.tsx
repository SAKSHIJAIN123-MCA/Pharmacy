import Image from 'next/image';

export default function DietaryPractices() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
      {/* Main Content */}
      <div className="lg:col-span-2 space-y-6">
        <p className="text-sm text-gray-500">Home &gt; Blogs &gt; Healthy Dietary Practices for Better Living</p>
        <h1 className="text-2xl sm:text-3xl font-bold">Healthy Dietary Practices for Better Living</h1>
        <p className="text-sm text-gray-600">By Apollo 24|7 | Updated on May 15, 2023</p>

        <div className="w-full h-[250px] relative rounded overflow-hidden">
          <Image
            src="/dietary practices.webp"
            alt="Healthy Dietary Practices"
            layout="fill"
            objectFit="cover"
            sizes="100vw"
            priority
          />
        </div>

        <article className="space-y-4 text-sm sm:text-base text-gray-700 break-words">
          <p>Whether managing chronic conditions or simply aiming for overall wellness, adopting healthy dietary practices is essential for a balanced life...</p>
          
          <h2 className="text-lg sm:text-xl font-semibold mt-6">Understanding Dietary Practices: The Basics</h2>
          <p>Healthy eating is about more than just calories; it involves nutrient balance, portion control, and mindful choices...</p>

          <h3 className="text-base sm:text-lg font-semibold mt-4">1. Prioritize Whole Foods</h3>
          <p>Focus on fruits, vegetables, whole grains, nuts, and seeds rather than processed foods to maximize nutrient intake.</p>

          <h3 className="text-base sm:text-lg font-semibold mt-4">2. Balance Macronutrients</h3>
          <p>A good mix of carbohydrates, proteins, and healthy fats supports energy and body functions effectively.</p>

          <h2 className="text-lg sm:text-xl font-semibold mt-6">Key Dietary Practices to Follow</h2>
          <ul className="list-disc list-inside">
            <li>Eat a variety of foods to get a full spectrum of nutrients</li>
            <li>Limit added sugars and salt intake</li>
            <li>Stay hydrated by drinking enough water</li>
            <li>Control portion sizes to avoid overeating</li>
            <li>Include fiber-rich foods for digestive health</li>
            <li>Practice mindful eating to improve digestion and satisfaction</li>
            <li>Plan meals to avoid impulsive unhealthy choices</li>
          </ul>

          <h2 className="text-lg sm:text-xl font-semibold mt-6">Additional Tips for Success</h2>
          <p>Along with good dietary practices, regular physical activity, adequate sleep, and stress management contribute to overall health.</p>

          <h2 className="text-lg sm:text-xl font-semibold mt-6">Conclusion</h2>
          <p>Implementing healthy dietary habits can improve your quality of life and prevent many lifestyle-related diseases. Start small and stay consistent.</p>
        </article>

        {/* FAQ */}
        <div className="mt-10">
          <h2 className="text-lg sm:text-xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="border p-4 rounded">
              <summary className="font-semibold">Can I follow these practices if I have dietary restrictions?</summary>
              <p className="mt-2 text-sm sm:text-base text-gray-700 break-words">Yes! These practices are adaptable to most dietary needs including allergies and intolerances.</p>
            </details>
            <details className="border p-4 rounded">
              <summary className="font-semibold">How do I stay motivated to maintain these habits?</summary>
              <p className="mt-2 text-sm sm:text-base text-gray-700 break-words">Set realistic goals, track progress, and seek support from family or professionals.</p>
            </details>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-10">
        <div className="p-4 sm:p-6 rounded">
          <h3 className="font-semibold mb-2">Services</h3>
          <ul className="text-sm text-gray-600 space-y-4">
            <li><a href="#">Book Lab Tests</a></li>
            <li><a href="#">Online Doctor Consult</a></li>
            <li><a href="#">Order Medicines</a></li>
            <li><a href="#">Health Tips</a></li>
          </ul>
        </div>

        <div className="p-4 sm:p-6 rounded">
          <h3 className="font-semibold mb-2">Recommended for you</h3>
          <div className="space-y-4">
            <div className="flex gap-2">
              <Image src="/dietary practices.webp" alt="Nutrition Basics" width={60} height={60} className="rounded" />
              <p className="text-sm sm:text-base">Understanding Nutrition: What Your Body Needs</p>
            </div>
            <div className="flex gap-2">
              <Image src="/dietary practices.webp" alt="Hydration Tips" width={60} height={60} className="rounded" />
              <p className="text-sm sm:text-base">Importance of Staying Hydrated</p>
            </div>
          </div>
        </div>

        <form className="p-4 sm:p-6 rounded space-y-4">
          <h3 className="font-semibold">Subscribe</h3>
          <input type="email" placeholder="Enter your email" className="w-full p-2 border rounded text-sm" />
          <button className="w-full bg-blue-500 text-white py-2 rounded text-sm">Submit</button>
        </form>
      </div>
    </div>
  );
}
