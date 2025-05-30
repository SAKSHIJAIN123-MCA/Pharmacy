import Image from 'next/image';

export default function FatLoss() {
  return (
    <div className="px-4 md:px-12 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Content */}
      <div className="lg:col-span-2 space-y-6">
        <p className="text-sm text-gray-500 break-words">Home &gt; Blogs &gt; Fat Loss: Key Facts and Tips</p>
        <h1 className="text-3xl font-bold">Fat Loss: Key Facts and Tips</h1>
        <p className="text-sm text-gray-600">By Apollo 24|7 | Updated on May 15, 2023</p>

        <div className="w-full h-[250px] relative rounded overflow-hidden">
          <Image src="/fat loss.webp" alt="Fat Loss" layout="fill" objectFit="cover" />
        </div>

        <article className="space-y-4 text-sm text-gray-700 break-words">
          <p>Fat loss is a gradual process that involves reducing excess body fat through a combination of diet, exercise, and lifestyle changes.</p>

          <h2 className="text-xl font-semibold mt-6">Understanding Fat Loss</h2>
          <p>Fat loss occurs when your body burns more calories than it consumes, creating a calorie deficit that forces the body to use stored fat for energy.</p>

          <h3 className="text-lg font-semibold mt-4">1. Balanced Nutrition</h3>
          <p>Eating nutrient-dense foods, reducing processed foods, and controlling portion sizes help manage calorie intake effectively.</p>

          <h3 className="text-lg font-semibold mt-4">2. Regular Exercise</h3>
          <p>Incorporate both cardio and strength training to maximize fat burning and build lean muscle mass.</p>

          <h3 className="text-lg font-semibold mt-4">3. Adequate Sleep</h3>
          <p>Poor sleep can disrupt hormones that regulate hunger and fat storage, so prioritize 7-9 hours of quality sleep.</p>

          <h3 className="text-lg font-semibold mt-4">4. Stress Management</h3>
          <p>Chronic stress increases cortisol, a hormone linked to fat accumulation, especially around the abdomen.</p>

          <h2 className="text-xl font-semibold mt-6">Effective Fat Loss Strategies</h2>
          <ul className="list-disc list-inside">
            <li>Create a sustainable calorie deficit</li>
            <li>Focus on whole foods rich in protein, fiber, and healthy fats</li>
            <li>Stay hydrated and limit sugary drinks</li>
            <li>Track progress but be patient and consistent</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6">Common Myths About Fat Loss</h2>
          <p>Spot reduction, crash diets, and fat-burning supplements promise quick fixes but often fail to provide lasting results.</p>

          <h2 className="text-xl font-semibold mt-6">Conclusion</h2>
          <p>Successful fat loss requires a holistic approach combining healthy eating, regular activity, sleep, and stress management for lasting results.</p>
        </article>

        {/* FAQ */}
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="border p-4 rounded">
              <summary className="font-semibold">Is it better to lose fat or weight?</summary>
              <p className="mt-2 text-sm text-gray-700">Losing fat is preferable as it focuses on reducing fat while preserving muscle mass, leading to a healthier body composition.</p>
            </details>
            <details className="border p-4 rounded">
              <summary className="font-semibold">How fast should I aim to lose fat?</summary>
              <p className="mt-2 text-sm text-gray-700">A safe rate is about 0.5 to 1 kg (1-2 pounds) per week to ensure sustainable and healthy fat loss.</p>
            </details>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-10">
        <div className="p-6 rounded bg-gray-100"> {/* Added bg for contrast on mobile */}
          <h3 className="font-semibold mb-2">Services</h3>
          <ul className="text-sm text-gray-600 space-y-4">
            <li><a href="#">Book Lab Tests</a></li>
            <li><a href="#">Online Doctor Consult</a></li>
            <li><a href="#">Order Medicines</a></li>
            <li><a href="#">Health Tips</a></li>
          </ul>
        </div>

        <div className="p-6 rounded bg-gray-100">
          <h3 className="font-semibold mb-2">Recommended for you</h3>
          <div className="space-y-4">
            <div className="flex gap-2">
              <Image src="/fat loss.webp" alt="7 Day Diet Plan" width={60} height={60} className="rounded max-w-full" />
              <p className="text-sm break-words">7-Day Diet Plan for Weight Loss</p>
            </div>
            <div className="flex gap-2">
              <Image src="/fat loss.webp" alt="Vitamins for Weight Loss" width={60} height={60} className="rounded max-w-full" />
              <p className="text-sm break-words">Vitamins for Weight Loss</p>
            </div>
          </div>
        </div>

        <form className="p-6 rounded bg-gray-100 space-y-4">
          <h3 className="font-semibold">Subscribe</h3>
          <input type="email" placeholder="Enter your email" className="w-full p-2 border rounded text-sm" />
          <button className="w-full bg-blue-500 text-white py-2 rounded text-sm">Submit</button>
        </form>
      </div>
    </div>
  );
}
