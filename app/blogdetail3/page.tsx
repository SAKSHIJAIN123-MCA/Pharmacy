import Image from 'next/image';

export default function AppleCiderBenefits() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
      {/* Main Content */}
      <div className="lg:col-span-2 space-y-6">
        <p className="text-sm text-gray-500">Home &gt; Blogs &gt; Apple Cider Vinegar and Its Dietary Benefits</p>
        <h1 className="text-2xl sm:text-3xl font-bold">Apple Cider Vinegar and Its Dietary Benefits</h1>
        <p className="text-sm text-gray-600">By Apollo 24|7 | Updated on May 15, 2023</p>

        <div className="w-full h-[250px] relative rounded overflow-hidden">
          <Image
            src="/apple cider.webp"
            alt="Apple Cider Vinegar"
            layout="fill"
            objectFit="cover"
            sizes="100vw"
            priority
          />
        </div>

        <article className="space-y-4 text-sm sm:text-base text-gray-700 break-words">
          <p>Apple cider vinegar (ACV) has been used traditionally for its potential health benefits...</p>
          
          <h2 className="text-lg sm:text-xl font-semibold mt-6">What is Apple Cider Vinegar?</h2>
          <p>Apple cider vinegar is made from fermented apple juice...</p>

          <h3 className="text-base sm:text-lg font-semibold mt-4">1. May Support Weight Management</h3>
          <p>Some studies suggest that ACV can help reduce appetite...</p>

          <h3 className="text-base sm:text-lg font-semibold mt-4">2. Aids Digestion</h3>
          <p>ACV is thought to improve digestion by increasing stomach acidity...</p>

          <h2 className="text-lg sm:text-xl font-semibold mt-6">How to Incorporate Apple Cider Vinegar in Your Diet</h2>
          <ul className="list-disc list-inside">
            <li>Mix 1–2 tablespoons of ACV with water before meals</li>
            <li>Use it as a salad dressing ingredient</li>
            <li>Add to marinades or sauces for flavor</li>
            <li>Avoid consuming undiluted vinegar to protect tooth enamel and the esophagus</li>
          </ul>

          <h2 className="text-lg sm:text-xl font-semibold mt-6">Precautions and Considerations</h2>
          <p>While generally safe in moderate amounts, excessive consumption...</p>

          <h2 className="text-lg sm:text-xl font-semibold mt-6">Conclusion</h2>
          <p>Apple cider vinegar can be a useful addition to a balanced diet...</p>
        </article>

        {/* FAQ */}
        <div className="mt-10">
          <h2 className="text-lg sm:text-xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="border p-4 rounded">
              <summary className="font-semibold">Can apple cider vinegar be taken daily?</summary>
              <p className="mt-2 text-sm sm:text-base text-gray-700 break-words">Yes, but it’s best to limit intake to 1–2 tablespoons per day diluted in water.</p>
            </details>
            <details className="border p-4 rounded">
              <summary className="font-semibold">Does it help with blood sugar control?</summary>
              <p className="mt-2 text-sm sm:text-base text-gray-700 break-words">Some research indicates ACV may improve insulin sensitivity...</p>
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
              <Image src="/apple cider.webp" alt="Dietary Practices" width={60} height={60} className="rounded" />
              <p className="text-sm sm:text-base">Healthy Dietary Practices for Better Living</p>
            </div>
            <div className="flex gap-2">
              <Image src="/apple cider.webp" alt="Fat Loss Supplements" width={60} height={60} className="rounded" />
              <p className="text-sm sm:text-base">How Do Fat Loss Supplements Work?</p>
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
