import Image from 'next/image';

export default function BestExercisesWeightLoss() {
  return (
    <div className="px-4 md:px-12 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Content */}
      <div className="lg:col-span-2 space-y-6">
        <p className="text-sm text-gray-500 break-words">Home &gt; Blogs &gt; Best Exercises for Weight Loss</p>
        <h1 className="text-3xl font-bold break-words">Best Exercises for Weight Loss</h1>
        <p className="text-sm text-gray-600 break-words">By Apollo 24|7 | Updated on May 15, 2023</p>

        <div className="w-full h-[250px] relative rounded overflow-hidden">
          <Image src="/best exercises.webp" alt="Best Exercises for Weight Loss" layout="fill" objectFit="cover" />
        </div>

        <article className="space-y-4 text-sm text-gray-700 break-words">
          <p>Exercise plays a crucial role in weight loss by burning calories, boosting metabolism, and improving overall fitness.</p>

          <h2 className="text-xl font-semibold mt-6">1. High-Intensity Interval Training (HIIT)</h2>
          <p>HIIT involves short bursts of intense activity followed by brief rest periods, effectively burning fat in less time.</p>

          <h2 className="text-xl font-semibold mt-6">2. Strength Training</h2>
          <p>Building muscle helps increase your resting metabolic rate, meaning you burn more calories even at rest.</p>

          <h2 className="text-xl font-semibold mt-6">3. Cardio Exercises</h2>
          <p>Activities like running, cycling, and swimming increase your heart rate and help burn significant calories.</p>

          <h2 className="text-xl font-semibold mt-6">4. Walking</h2>
          <p>Simple and accessible, walking regularly helps create a calorie deficit and improve cardiovascular health.</p>

          <h2 className="text-xl font-semibold mt-6">5. Yoga</h2>
          <p>Yoga helps reduce stress, improve flexibility, and support mindful eating habits, aiding weight loss indirectly.</p>

          <h2 className="text-xl font-semibold mt-6">Tips for Success</h2>
          <ul className="list-disc list-inside">
            <li>Combine different exercise types for balanced fitness</li>
            <li>Stay consistent and gradually increase intensity</li>
            <li>Listen to your body and rest when needed</li>
            <li>Pair exercise with a healthy diet for best results</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6">Conclusion</h2>
          <p>Incorporating a variety of exercises into your routine can accelerate fat loss and improve overall health. Choose activities you enjoy to stay motivated.</p>
        </article>

        {/* FAQ */}
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="border p-4 rounded">
              <summary className="font-semibold">How often should I exercise for weight loss?</summary>
              <p className="mt-2 text-sm text-gray-700 break-words">Aim for at least 150 minutes of moderate-intensity or 75 minutes of high-intensity exercise per week.</p>
            </details>
            <details className="border p-4 rounded">
              <summary className="font-semibold">Can I lose weight with exercise alone?</summary>
              <p className="mt-2 text-sm text-gray-700 break-words">Exercise helps, but combining it with a balanced diet is crucial for effective weight loss.</p>
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
          <div className="space-y-4">
            <div className="flex gap-2">
              <Image src="/best exercises.webp" alt="7 Day Diet Plan" width={60} height={60} className="rounded max-w-full" />
              <p className="text-sm break-words">7-Day Diet Plan for Weight Loss</p>
            </div>
            <div className="flex gap-2">
              <Image src="/best exercises.webp" alt="Fat Loss" width={60} height={60} className="rounded max-w-full" />
              <p className="text-sm break-words">Fat Loss: Key Facts and Tips</p>
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
