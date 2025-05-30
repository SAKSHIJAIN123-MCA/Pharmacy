"use client"; 

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { icon: "/ayurveda.webp", label: "Ayurveda", link: "/category1" },
  { icon: "/conditions.webp", label: "Conditions", link: "/category2" },
  { icon: "/events.svg", label: "Events/Launches", link: "/category3" },
  {
    icon: "/General Health Icon.svg",
    label: "General Health",
    link: "/category4",
  },
  {
    icon: "/General Health Icon.svg",
    label: "Health & Nutrition",
    link: "/category5",
  },
  {
    icon: "/Health Devices_0.webp",
    label: "Health Devices",
    link: "/category6",
  },
];

const articles = [
  {
    img: "/7-day diet.webp",
    title: "7-Day Diet Plan for Weight Loss",
    description: "Kickstart your fitness journey...",
    category: "General Health",
    link: "/blogdetail",
  },
  {
    img: "/dietary practices.webp",
    title: "Dietary Practices That May Speed Up Your...",
    description: "Discover effective and natural dietary practices...",
    category: "General Health",
    link: "/blogdetail2",
  },
  {
    img: "/apple cider.webp",
    title: "Does Apple Cider Vinegar Work for Weight...",
    description: "Curious about apple cider vinegar for weight loss? ...",
    category: "General Health",
    link: "/blogdetail3",
  },
  {
    img: "/weight loss.webp",
    title: "7 Easy Weight Loss Recipes",
    description: "Looking for healthy Indian recipes for weight loss? ...",
    category: "General Health",
    link: "/blogdetail4",
  },
  {
    img: "/vitamins.webp",
    title: "Vitamins For Weight Loss: Know What Works",
    description: "Can vitamins help you lose weight? Discover top nutrients...",
    category: "General Health",
    link: "/blogdetail5",
  },
  {
    img: "/fat loss.webp",
    title: "How Do Fat Loss Supplements Work?",
    description:
      "Curious about fat burner supplements? Discover how they work...",
    category: "General Health",
    link: "/blogdetail6",
  },
  {
    img: "/is mounjaro.webp",
    title: "Is Mounjaro Best for Weight Loss?",
    description:
      "Explore whether Mounjaro (tirzepatide) is the most effective...",
    category: "General Health",
    link: "/blogdetail7",
  },
  {
    img: "/best exercises.webp",
    title: "Best Exercises For Weight Loss",
    description: "Discover the most effective exercises for weight loss...",
    category: "General Health",
    link: "/blogdetail8",
  },
  {
    img: "/strength.webp",
    title: "Strength Training Or Cardio Exercise: Which Is...",
    description: "Trying to lose weight? Find out whether strength training...",
    category: "General Health",
    link: "/blogdetail9",
  },
  {
    img: "/yoga.webp",
    title: "Yoga Asanas To Help You Lose Weight",
    description:
      "Looking to lose weight naturally? Discover effective yoga asanas...",
    category: "General Health",
    link: "/blogdetail10",
  },
  {
    img: "/7-day diet.webp",
    title: "7-Day Diet Plan for Weight Loss",
    description: "Kickstart your fitness journey...",
    category: "General Health",
    link: "/blogdetail",
  },
  {
    img: "/dietary practices.webp",
    title: "Dietary Practices That May Speed Up Your...",
    description: "Discover effective and natural dietary practices...",
    category: "General Health",
    link: "/blogdetail2",
  },
  {
    img: "/apple cider.webp",
    title: "Does Apple Cider Vinegar Work for Weight...",
    description: "Curious about apple cider vinegar for weight loss? ...",
    category: "General Health",
    link: "/blogdetail3",
  },
  {
    img: "/weight loss.webp",
    title: "7 Easy Weight Loss Recipes",
    description: "Looking for healthy Indian recipes for weight loss? ...",
    category: "General Health",
    link: "/blogdetail4",
  },
  {
    img: "/vitamins.webp",
    title: "Vitamins For Weight Loss: Know What Works",
    description: "Can vitamins help you lose weight? Discover top nutrients...",
    category: "General Health",
    link: "/blogdetail5",
  },
  {
    img: "/fat loss.webp",
    title: "How Do Fat Loss Supplements Work?",
    description:
      "Curious about fat burner supplements? Discover how they work...",
    category: "General Health",
    link: "/blogdetail6",
  },
  {
    img: "/is mounjaro.webp",
    title: "Is Mounjaro Best for Weight Loss?",
    description:
      "Explore whether Mounjaro (tirzepatide) is the most effective...",
    category: "General Health",
    link: "/blogdetail7",
  },
  {
    img: "/best exercises.webp",
    title: "Best Exercises For Weight Loss",
    description: "Discover the most effective exercises for weight loss...",
    category: "General Health",
    link: "/blogdetail8",
  },
  {
    img: "/strength.webp",
    title: "Strength Training Or Cardio Exercise: Which Is...",
    description: "Trying to lose weight? Find out whether strength training...",
    category: "General Health",
    link: "/blogdetail9",
  },
  {
    img: "/yoga.webp",
    title: "Yoga Asanas To Help You Lose Weight",
    description:
      "Looking to lose weight naturally? Discover effective yoga asanas...",
    category: "General Health",
    link: "/blogdetail10",
  },
];

export default function HealthPage() {
  const [visibleCount, setVisibleCount] = useState(10);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  const hasMore = visibleCount < articles.length;

  return (
    <div className="px-4 md:px-10 py-8">
      {/* Hero Section */}
      <div className="mb-10">
        <div className="relative w-full h-[400px] sm:h-[600px] md:h-[700px] bg-black rounded overflow-hidden">
          <Image
            src="/diaper2.avif"
            alt="Hero"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-60"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
            <div className="max-w-2xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
                How to Prevent and Treat Diaper Rash: <br /> Everything You Need
                to Know
              </h1>
              <Link href="/readmore">
                <button className="mt-4 px-4 py-2 bg-orange-400 rounded text-white text-sm sm:text-base">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((cat, idx) => (
            <Link
              href={cat.link}
              key={idx}
              className="flex flex-col items-center cursor-pointer hover:opacity-80 transition"
            >
              <Image src={cat.icon} alt={cat.label} width={50} height={50} />
              <span className="mt-2 text-sm text-center">{cat.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Articles Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Latest Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.slice(0, visibleCount).map((article, idx) => (
            <Link href={article.link || "#"} key={idx}>
              <div className="bg-white rounded shadow p-3 cursor-pointer hover:shadow-md transition">
                <Image
                  src={article.img}
                  alt={article.title}
                  width={400}
                  height={200}
                  className="rounded"
                />
                <p className="text-xs text-gray-500 mt-2">{article.category}</p>
                <h3 className="font-semibold mt-1 text-sm">{article.title}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  {article.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View More Button */}
        {hasMore && (
          <div className="flex justify-center mt-10">
            <button
              onClick={handleViewMore}
              className="px-4 py-2 border rounded text-sm text-gray-700 hover:bg-gray-100 transition"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
