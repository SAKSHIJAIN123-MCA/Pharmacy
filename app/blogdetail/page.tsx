import Image from 'next/image';

export default function BlogRead1() {
  return (
    <div className="px-4 sm:px-6 md:px-12 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Content */}
      <div className="lg:col-span-2 space-y-6">
        <p className="text-sm text-gray-500 break-words">Home &gt; Blogs &gt; 7-Day Diet Plan for Weight Loss</p>
        <h1 className="text-2xl sm:text-3xl font-bold leading-tight">7-Day Diet Plan for Weight Loss</h1>
        <p className="text-sm text-gray-600">By Apollo 24|7 | Updated on May 15, 2023</p>
        
        <div className="w-full h-[200px] sm:h-[250px] relative rounded overflow-hidden">
          <Image src="/7-day diet.webp" alt="7 Day Diet Plan" layout="fill" objectFit="cover" />
        </div>

        <article className="space-y-4 text-sm text-gray-700">
          <p>Diabetes, PCOS, thyroid, or weight loss? You need a balanced plan. This 7-day Indian diet plan is a great starting point...</p>
          
          <h2 className="text-xl font-semibold mt-6">Understanding Weight Loss: The Basics</h2>
          <p>Before you begin your diet journey, you need to understand the fundamentals...</p>

          <h3 className="text-lg font-semibold mt-4">1. Reduce Calorie Intake</h3>
          <p>Calories in vs calories out is a basic principle...</p>

          <h3 className="text-lg font-semibold mt-4">2. Include More Fibre</h3>
          <p>Fibre helps you stay full for longer and reduces overall calorie intake...</p>

          <h2 className="text-xl font-semibold mt-6">7-Day Diet Plan for Weight Loss</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Day 1: Detox and hydrate</li>
            <li>Day 2: Fibre-rich meals</li>
            <li>Day 3: Balanced protein intake</li>
            <li>Day 4: Healthy fats focus</li>
            <li>Day 5: Lower carb choices</li>
            <li>Day 6: Controlled portions</li>
            <li>Day 7: Review and balance</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6">Additional Tips for Success</h2>
          <p>Alongside a healthy diet, make sure to stay active, sleep well, and manage stress.</p>

          <h2 className="text-xl font-semibold mt-6">Conclusion</h2>
          <p>Sticking to a well-structured plan increases your chances of sustainable weight loss. This guide gives you a simple start...</p>
        </article>

        {/* FAQ */}
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="border p-4 rounded">
              <summary className="font-semibold cursor-pointer">Can I exercise while on this diet?</summary>
              <p className="mt-2 text-sm text-gray-700">Yes! Moderate physical activity complements the diet plan.</p>
            </details>
            <details className="border p-4 rounded">
              <summary className="font-semibold cursor-pointer">Is this plan suitable for vegetarians?</summary>
              <p className="mt-2 text-sm text-gray-700">Absolutely, this plan includes plenty of plant-based foods.</p>
            </details>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-10">
        <div className="p-6 rounded bg-white shadow">
          <h3 className="font-semibold mb-2">Services</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li><a href="#" className="hover:underline">Book Lab Tests</a></li>
            <li><a href="#" className="hover:underline">Online Doctor Consult</a></li>
            <li><a href="#" className="hover:underline">Order Medicines</a></li>
            <li><a href="#" className="hover:underline">Health Tips</a></li>
          </ul>
        </div>

        <div className="p-6 rounded bg-white shadow">
          <h3 className="font-semibold mb-2">Recommended for you</h3>
          <div className="space-y-4">
            <div className="flex gap-2 items-center">
              <Image src="/apple cider.webp" alt="apple cider" width={60} height={60} className="rounded" />
              <p className="text-sm">Does Apple Cider Vinegar Help With Weight Loss?</p>
            </div>
            <div className="flex gap-2 items-center">
              <Image src="/fat loss.webp" alt="fat loss" width={60} height={60} className="rounded" />
              <p className="text-sm">How Do Fat Loss Supplements Work?</p>
            </div>
          </div>
        </div>

        <form className="p-6 rounded space-y-4 bg-white shadow">
          <h3 className="font-semibold">Subscribe</h3>
          <input type="email" placeholder="Enter your email" className="w-full p-2 border rounded text-sm" />
          <button className="w-full bg-blue-500 text-white py-2 rounded text-sm hover:bg-blue-600 transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
