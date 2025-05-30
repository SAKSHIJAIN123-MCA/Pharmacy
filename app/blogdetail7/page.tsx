import Image from 'next/image';

export default function MounjaroWeightLoss() {
  return (
    <div className="px-4 md:px-12 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Content */}
      <div className="lg:col-span-2 space-y-6">
        <p className="text-sm text-gray-500 break-words">Home &gt; Blogs &gt; Mounjaro Best for Weight Loss</p>
        <h1 className="text-3xl font-bold">Is Mounjaro the Best Option for Weight Loss?</h1>
        <p className="text-sm text-gray-600">By Apollo 24|7 | Updated on May 15, 2023</p>

        <div className="w-full h-[250px] relative rounded overflow-hidden">
          <Image src="/is mounjaro.webp" alt="Mounjaro for Weight Loss" layout="fill" objectFit="cover" />
        </div>

        <article className="space-y-4 text-sm text-gray-700 break-words">
          <p>Mounjaro (tirzepatide) is a newer medication gaining attention for its potential to support weight loss, especially in people with type 2 diabetes and obesity.</p>
          
          <h2 className="text-xl font-semibold mt-6">What is Mounjaro?</h2>
          <p>Mounjaro is a prescription injectable medication that acts on two hormones, GLP-1 and GIP, which regulate blood sugar and appetite, helping reduce hunger and calorie intake.</p>

          <h2 className="text-xl font-semibold mt-6">How Does Mounjaro Aid Weight Loss?</h2>
          <p>By mimicking the action of incretin hormones, Mounjaro helps control blood sugar and suppresses appetite, leading to reduced food intake and gradual weight loss.</p>

          <h2 className="text-xl font-semibold mt-6">Who Should Consider Mounjaro?</h2>
          <p>Mounjaro is primarily prescribed for people with type 2 diabetes, but it has also shown promise in aiding weight loss for those struggling with obesity under medical supervision.</p>

          <h2 className="text-xl font-semibold mt-6">Benefits of Mounjaro for Weight Loss</h2>
          <ul className="list-disc list-inside">
            <li>Effective appetite suppression</li>
            <li>Improved blood sugar control</li>
            <li>Potential for significant weight reduction</li>
            <li>Once-weekly injection for convenience</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6">Possible Side Effects</h2>
          <p>Common side effects may include nausea, diarrhea, or constipation. Always consult a healthcare professional before starting Mounjaro.</p>

          <h2 className="text-xl font-semibold mt-6">Conclusion</h2>
          <p>Mounjaro offers a promising new option for weight loss, particularly for those with diabetes or obesity, but should be used under strict medical guidance alongside lifestyle changes.</p>
        </article>

        {/* FAQ */}
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="border p-4 rounded">
              <summary className="font-semibold">Is Mounjaro safe for everyone?</summary>
              <p className="mt-2 text-sm text-gray-700">No, Mounjaro should only be used under medical supervision and is not suitable for everyone.</p>
            </details>
            <details className="border p-4 rounded">
              <summary className="font-semibold">How quickly does Mounjaro cause weight loss?</summary>
              <p className="mt-2 text-sm text-gray-700">Weight loss varies by individual, but studies show gradual reductions over several weeks to months.</p>
            </details>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-10">
        <div className="p-6 rounded bg-gray-100">
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
          <div className="space-y-3">
            <div className="flex gap-2">
              <Image src="/is mounjaro.webp" alt="Fat Loss" width={60} height={60} className="rounded max-w-full" />
              <p className="text-sm break-words">Fat Loss: Key Facts and Tips</p>
            </div>
            <div className="flex gap-2">
              <Image src="/is mounjaro.webp" alt="Vitamins for Weight Loss" width={60} height={60} className="rounded max-w-full" />
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
