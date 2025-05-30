'use client';

import React from 'react';
import Image from 'next/image';

export default function EasyWeightLossRecipes() {
  return (
    <div className="w-full px-4 md:px-12 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Content */}
      <div className="lg:col-span-2 space-y-6">
        <p className="text-sm text-gray-500">Home &gt; Blogs &gt; 7 Easy Weight Loss Recipes</p>
        <h1 className="text-3xl font-bold">7 Easy Weight Loss Recipes</h1>
        <p className="text-sm text-gray-600">By Apollo 24|7 | Updated on May 15, 2023</p>

        <div className="w-full h-[250px] relative rounded overflow-hidden">
          <Image
            src="/weight loss.webp"
            alt="7 Easy Weight Loss Recipes"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <article className="space-y-4 text-sm text-gray-700">
          <p>
            Looking for quick, delicious, and healthy recipes to support your weight loss journey? These 7 easy recipes are nutritious and simple to prepare.
          </p>

          <h2 className="text-xl font-semibold mt-6">Why Choose Healthy Recipes?</h2>
          <p>
            Weight loss is easier to achieve and sustain with meals that are balanced, nutrient-dense, and satisfying.
          </p>

          <h3 className="text-lg font-semibold mt-4">1. Quinoa and Vegetable Salad</h3>
          <p>A protein-packed salad with fresh veggies and a light lemon dressing.</p>

          <h3 className="text-lg font-semibold mt-4">2. Grilled Chicken with Steamed Broccoli</h3>
          <p>Lean protein paired with fiber-rich broccoli for a fulfilling meal.</p>

          <h3 className="text-lg font-semibold mt-4">3. Oats and Banana Smoothie</h3>
          <p>A quick breakfast smoothie with oats, banana, and low-fat yogurt.</p>

          <h3 className="text-lg font-semibold mt-4">4. Lentil Soup</h3>
          <p>Hearty and filling, packed with fiber and plant-based protein.</p>

          <h3 className="text-lg font-semibold mt-4">5. Baked Salmon with Asparagus</h3>
          <p>Omega-3 rich salmon with roasted asparagus for heart-healthy benefits.</p>

          <h3 className="text-lg font-semibold mt-4">6. Chickpea Stir-Fry</h3>
          <p>A quick and flavorful vegetarian stir-fry with chickpeas and vegetables.</p>

          <h3 className="text-lg font-semibold mt-4">7. Greek Yogurt with Berries</h3>
          <p>A satisfying snack or dessert rich in protein and antioxidants.</p>

          <h2 className="text-xl font-semibold mt-6">Tips for Healthy Cooking</h2>
          <p>
            Use minimal oil, prefer grilling or baking over frying, and incorporate plenty of fresh herbs and spices for flavor.
          </p>

          <h2 className="text-xl font-semibold mt-6">Conclusion</h2>
          <p>
            Incorporate these easy recipes into your meal plan to enjoy tasty, healthy food that supports your weight loss goals.
          </p>
        </article>

        {/* FAQ */}
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="border p-4 rounded">
              <summary className="font-semibold">Can these recipes be customized for vegetarians?</summary>
              <p className="mt-2 text-sm text-gray-700">
                Yes! Simply swap meat with plant-based proteins like tofu, tempeh, or legumes.
              </p>
            </details>
            <details className="border p-4 rounded">
              <summary className="font-semibold">How do I make these meals more filling?</summary>
              <p className="mt-2 text-sm text-gray-700">
                Add fiber-rich sides like salads or whole grains, and include healthy fats in moderation.
              </p>
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
              <Image
                src="/weight loss.webp"
                alt="7 Day Diet Plan"
                width={60}
                height={60}
                className="rounded"
              />
              <p className="text-sm">7-Day Diet Plan for Weight Loss</p>
            </div>
            <div className="flex gap-2">
              <Image
                src="/weight loss.webp"
                alt="Apple Cider Vinegar"
                width={60}
                height={60}
                className="rounded"
              />
              <p className="text-sm">Apple Cider Vinegar and Its Benefits</p>
            </div>
          </div>
        </div>

        <form className="p-6 rounded bg-gray-100 space-y-4">
          <h3 className="font-semibold">Subscribe</h3>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 border rounded text-sm"
          />
          <button className="w-full bg-blue-500 text-white py-2 rounded text-sm">Submit</button>
        </form>
      </div>
    </div>
  );
}
