import Image from 'next/image';

export default function YogaAsanas() {
  return (
    <div className="px-4 md:px-12 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Content */}
      <div className="lg:col-span-2 space-y-6">
        <p className="text-sm text-gray-500 break-words">Home &gt; Blogs &gt; Yoga Asanas for Weight Loss</p>
        <h1 className="text-3xl font-bold break-words">Effective Yoga Asanas for Weight Loss</h1>
        <p className="text-sm text-gray-600 break-words">By Apollo 24|7 | Updated on May 15, 2023</p>

        <div className="w-full h-[250px] relative rounded overflow-hidden">
          <Image src="/yoga.webp" alt="Yoga Asanas" layout="fill" objectFit="cover" />
        </div>

        <article className="space-y-4 text-sm text-gray-700 break-words">
          <p>Yoga is a holistic approach to fitness that helps reduce stress, improve flexibility, and support sustainable weight loss.</p>

          <h2 className="text-xl font-semibold mt-6">1. Surya Namaskar (Sun Salutation)</h2>
          <p>This dynamic sequence of poses warms up the body and boosts metabolism.</p>

          <h2 className="text-xl font-semibold mt-6">2. Bhujangasana (Cobra Pose)</h2>
          <p>Strengthens the spine and tones abdominal muscles, aiding digestion and fat burning.</p>

          <h2 className="text-xl font-semibold mt-6">3. Trikonasana (Triangle Pose)</h2>
          <p>Stretches the sides of the body, improves digestion, and helps in reducing belly fat.</p>

          <h2 className="text-xl font-semibold mt-6">4. Naukasana (Boat Pose)</h2>
          <p>Targets the core muscles and helps tone the abdomen effectively.</p>

          <h2 className="text-xl font-semibold mt-6">5. Dhanurasana (Bow Pose)</h2>
          <p>Stimulates the abdominal organs and helps improve metabolism.</p>

          <h2 className="text-xl font-semibold mt-6">Tips for Practicing Yoga for Weight Loss</h2>
          <ul className="list-disc list-inside">
            <li>Practice regularly and with proper form</li>
            <li>Combine yoga with a balanced diet and cardio exercises</li>
            <li>Stay hydrated and listen to your body’s limits</li>
            <li>Consider guided sessions for best results</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6">Conclusion</h2>
          <p>Incorporating these yoga asanas into your routine can enhance weight loss efforts by improving flexibility, strength, and mindfulness.</p>
        </article>

        {/* FAQ */}
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="border p-4 rounded">
              <summary className="font-semibold">Can beginners do these yoga poses?</summary>
              <p className="mt-2 text-sm text-gray-700 break-words">Yes, these poses are suitable for beginners with proper guidance.</p>
            </details>
            <details className="border p-4 rounded">
              <summary className="font-semibold">How often should I practice yoga for weight loss?</summary>
              <p className="mt-2 text-sm text-gray-700 break-words">Aim for at least 3-5 sessions per week for noticeable results.</p>
            </details>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-10">
        <div className="p-6 rounded bg-gray-100">
          <h3 className="font-semibold mb-2">Services</h3>
          <ul className="text-sm text-gray-600 space-y-4 break-words">
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
              <Image src="/yoga.webp" alt="Best Exercises" width={60} height={60} className="rounded max-w-full" />
              <p className="text-sm break-words">Best Exercises for Weight Loss</p>
            </div>
            <div className="flex gap-2">
              <Image src="/yoga.webp" alt="7 Day Diet Plan" width={60} height={60} className="rounded max-w-full" />
              <p className="text-sm break-words">7-Day Diet Plan for Weight Loss</p>
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
