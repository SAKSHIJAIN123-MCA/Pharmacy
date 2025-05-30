import Image from 'next/image';

export default function VitaminsForWeightLoss() {
  return (
    <div className="px-4 md:px-12 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Content */}
      <div className="lg:col-span-2 space-y-6">
        <p className="text-sm text-gray-500">Home &gt; Blogs &gt; Vitamins for Weight Loss</p>
        <h1 className="text-3xl font-bold">Vitamins for Weight Loss: What You Need to Know</h1>
        <p className="text-sm text-gray-600">By Apollo 24|7 | Updated on May 15, 2023</p>

        <div className="w-full h-[250px] relative rounded overflow-hidden">
          <Image
            src="/vitamins.webp"
            alt="Vitamins for Weight Loss"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <article className="space-y-4 text-sm text-gray-700 break-words">
          <p>
            Vitamins play a crucial role in overall health and can support your weight loss journey by boosting metabolism, reducing fatigue, and aiding fat burning.
          </p>
          
          <h2 className="text-xl font-semibold mt-6">Essential Vitamins That Support Weight Loss</h2>
          
          <h3 className="text-lg font-semibold mt-4">1. Vitamin D</h3>
          <p>Low levels of vitamin D have been linked to weight gain and difficulty losing weight. Adequate vitamin D supports healthy metabolism and fat regulation.</p>
          
          <h3 className="text-lg font-semibold mt-4">2. B Vitamins</h3>
          <p>B-complex vitamins like B6 and B12 help convert food into energy, reduce fatigue, and improve exercise performance.</p>
          
          <h3 className="text-lg font-semibold mt-4">3. Vitamin C</h3>
          <p>Vitamin C is an antioxidant that supports fat oxidation during exercise and helps maintain healthy skin and immune function.</p>

          <h3 className="text-lg font-semibold mt-4">4. Vitamin E</h3>
          <p>This antioxidant vitamin helps combat oxidative stress caused by exercise and supports overall metabolic health.</p>

          <h2 className="text-xl font-semibold mt-6">How to Get These Vitamins</h2>
          <ul className="list-disc list-inside">
            <li>Eat a balanced diet rich in fruits, vegetables, whole grains, and lean proteins</li>
            <li>Consider supplements only if advised by a healthcare professional</li>
            <li>Get regular sun exposure for natural vitamin D production</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6">Precautions</h2>
          <p>Excess intake of some vitamins can be harmful. Always consult your doctor before starting any new vitamin regimen.</p>

          <h2 className="text-xl font-semibold mt-6">Conclusion</h2>
          <p>Vitamins support many bodily functions essential for weight management, but they work best alongside a healthy diet and regular exercise.</p>
        </article>

        {/* FAQ */}
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="border p-4 rounded">
              <summary className="font-semibold">Can vitamins alone cause weight loss?</summary>
              <p className="mt-2 text-sm text-gray-700">No, vitamins support your body but must be combined with healthy lifestyle changes for effective weight loss.</p>
            </details>
            <details className="border p-4 rounded">
              <summary className="font-semibold">Should I take vitamin supplements?</summary>
              <p className="mt-2 text-sm text-gray-700">Supplements can help if you have deficiencies, but it’s best to get vitamins from food whenever possible.</p>
            </details>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-10">
        <div className="p-6 rounded bg-gray-100"> {/* Added bg-gray-100 for better sidebar bg on mobile */}
          <h3 className="font-semibold mb-2">Services</h3>
          <ul className="text-sm text-gray-600 space-y-4">
            <li><a href="#">Book Lab Tests</a></li>
            <li><a href="#">Online Doctor Consult</a></li>
            <li><a href="#">Order Medicines</a></li>
            <li><a href="#">Health Tips</a></li>
          </ul>
        </div>

        <div className="p-6 rounded bg-gray-100"> {/* Added bg-gray-100 */}
          <h3 className="font-semibold mb-2">Recommended for you</h3>
          <div className="space-y-4">
            <div className="flex gap-2">
              <Image
                src="/vitamins.webp"
                alt="7 Day Diet Plan"
                width={60}
                height={60}
                className="rounded max-w-full" // Added max-w-full for responsive image
              />
              <p className="text-sm break-words">{/* Added break-words */}
                7-Day Diet Plan for Weight Loss
              </p>
            </div>
            <div className="flex gap-2">
              <Image
                src="/vitamins.webp"
                alt="Apple Cider Vinegar"
                width={60}
                height={60}
                className="rounded max-w-full"
              />
              <p className="text-sm break-words">Apple Cider Vinegar and Its Benefits</p>
            </div>
          </div>
        </div>

        <form className="p-6 rounded bg-gray-100 space-y-4"> {/* Added bg-gray-100 */}
          <h3 className="font-semibold">Subscribe</h3>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 border rounded text-sm"
          />
          <button className="w-full bg-blue-500 text-white py-2 rounded text-sm">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
