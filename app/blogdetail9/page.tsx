import Image from 'next/image';

export default function CardioExercises() {
  return (
    <div className="px-4 md:px-12 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Content */}
      <div className="lg:col-span-2 space-y-6">
        <p className="text-sm text-gray-500 break-words">Home &gt; Blogs &gt; Cardio Exercises for Weight Loss</p>
        <h1 className="text-3xl font-bold break-words">Effective Cardio Exercises for Weight Loss</h1>
        <p className="text-sm text-gray-600 break-words">By Apollo 24|7 | Updated on May 15, 2023</p>

        <div className="w-full h-[250px] relative rounded overflow-hidden">
          <Image src="/strength.webp" alt="Cardio Exercises" layout="fill" objectFit="cover" />
        </div>

        <article className="space-y-4 text-sm text-gray-700 break-words">
          <p>Cardio exercises are key to burning calories and improving cardiovascular health, making them essential for weight loss.</p>

          <h2 className="text-xl font-semibold mt-6">1. Running or Jogging</h2>
          <p>Running is a high-impact cardio exercise that burns a significant number of calories and boosts metabolism.</p>

          <h2 className="text-xl font-semibold mt-6">2. Cycling</h2>
          <p>Cycling is a low-impact option that improves leg strength and endurance while helping you burn calories.</p>

          <h2 className="text-xl font-semibold mt-6">3. Jump Rope</h2>
          <p>Jump rope is an intense cardio workout that also enhances coordination and agility.</p>

          <h2 className="text-xl font-semibold mt-6">4. Swimming</h2>
          <p>Swimming works your entire body and is gentle on the joints, making it ideal for all fitness levels.</p>

          <h2 className="text-xl font-semibold mt-6">5. Dancing</h2>
          <p>Dancing is a fun way to get your heart rate up and burn calories without feeling like a workout.</p>

          <h2 className="text-xl font-semibold mt-6">Tips to Maximize Cardio Benefits</h2>
          <ul className="list-disc list-inside">
            <li>Start with warm-ups and end with cool-downs</li>
            <li>Mix different cardio activities to avoid boredom</li>
            <li>Gradually increase intensity and duration</li>
            <li>Stay hydrated and listen to your body</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6">Conclusion</h2>
          <p>Incorporating cardio exercises into your fitness routine can accelerate weight loss and improve overall health. Find the activities you enjoy and stay consistent.</p>
        </article>

        {/* FAQ */}
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="border p-4 rounded">
              <summary className="font-semibold">How often should I do cardio for weight loss?</summary>
              <p className="mt-2 text-sm text-gray-700 break-words">Aim for at least 150 minutes of moderate cardio or 75 minutes of vigorous cardio per week.</p>
            </details>
            <details className="border p-4 rounded">
              <summary className="font-semibold">Can I combine cardio with strength training?</summary>
              <p className="mt-2 text-sm text-gray-700 break-words">Yes, combining both can optimize fat loss and muscle building.</p>
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
              <Image src="/strength.webp" alt="Best Exercises" width={60} height={60} className="rounded max-w-full" />
              <p className="text-sm break-words">Best Exercises for Weight Loss</p>
            </div>
            <div className="flex gap-2">
              <Image src="/strength.webp" alt="7 Day Diet Plan" width={60} height={60} className="rounded max-w-full" />
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
