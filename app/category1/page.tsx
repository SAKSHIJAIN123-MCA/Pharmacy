import React from "react";

const articles = [
  {
    title: "7-Day Diet Plan for Weight Loss",
    description:
      "Kickstart your fitness journey with this easy-to-follow 7-day Indian diet plan...",
    image: "/7-day diet.webp",
    url: "/blogdetail",
  },
  {
    title: "Dietary Practices That May Speed Up Your Weight Loss",
    description:
      "Discover effective and natural dietary practices to lose weight fast and permanently...",
    image: "/dietary practices.webp",
    url: "/blogdetail2",
  },
  {
    title: "Does Apple Cider Vinegar Work for Weight Loss?",
    description:
      "Curious about apple cider vinegar for weight loss? Discover how ACV may support...",
    image: "/apple cider.webp",
    url: "/blogdetail3",
  },
  {
    title: "7 Easy Weight Loss Recipes",
    description:
      "Looking for healthy Indian recipes for weight loss? These 7 easy dishes...",
    image: "/weight loss.webp",
    url: "/blogdetail4",
  },
  {
    title: "Vitamins For Weight Loss: Know What Works",
    description:
      "Can vitamins help you lose weight? Discover top nutrients like B-complex, iron...",
    image: "/vitamins.webp",
    url: "/blogdetail5",
  },
  {
    title: "How Do Fat Loss Supplements Work?",
    description:
      "Curious about fat burner supplements? Discover how they work, ingredients...",
    image: "/fat loss.webp",
    url: "/blogdetail6",
  },
  {
    title: "Is Mounjaro Best for Weight Loss?",
    description:
      "Explore whether Mounjaro (tirzepatide) is the most effective weight loss medication...",
    image: "/is mounjaro.webp",
    url: "/blogdetail7",
  },
  {
    title: "Best Exercises For Weight Loss",
    description:
      "Discover the most effective exercises for weight loss, including cardio, strength...",
    image: "/best exercises.webp",
    url: "/blogdetail8",
  },
  {
    title: "Strength Training Or Cardio Exercise: Which Is Better?",
    description:
      "Trying to lose weight? Find out whether strength training or cardio is more effective...",
    image: "/strength.webp",
    url: "/blogdetail9",
  },
  {
    title: "Yoga Asanas To Help You Lose Weight",
    description:
      "Looking to lose weight naturally? Discover effective yoga asanas that support...",
    image: "/yoga.webp",
    url: "/blogdetail10",
  },
];

export default function HealthArticlesPage() {
  return (
    <div className="p-4 sm:p-6 max-w-8xl mx-auto">
      <div className="w-full bg-blue-600 text-white text-center py-10 sm:py-12 mb-8 px-4 sm:px-0">
        <h1 className="text-2xl sm:text-3xl font-semibold leading-tight">
          Curated articles and news for your general health and wellness.
        </h1>
      </div>

      <h2 className="text-lg sm:text-xl font-semibold mb-4 px-2 sm:px-0">Latest Articles</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow overflow-hidden flex flex-col"
          >
            <a href={article.url}>
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 sm:h-56 md:h-48 lg:h-52 object-cover"
              />
            </a>
            <div className="p-4 flex-1 flex flex-col">
              <p className="text-xs sm:text-sm text-gray-500 mb-1">General Health</p>
              <h3 className="font-semibold text-base sm:text-lg mb-2 leading-snug">{article.title}</h3>
              <p className="text-xs sm:text-sm text-gray-700 line-clamp-3">
                {article.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-teal-50 p-4 sm:p-6 rounded-xl mb-12">
        <h3 className="text-sm sm:text-md font-bold mb-2 leading-tight">
          Sign up for our free Health Library Daily Newsletter
        </h3>
        <p className="text-xs sm:text-sm mb-4">
          Get doctor-approved health tips, news, and more.
        </p>
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter email id"
            className="p-2 border rounded-md flex-1 text-sm"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm sm:text-base"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="text-center px-2 sm:px-0">
        <button className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 text-sm sm:text-base">
          View more
        </button>
      </div>
    </div>
  );
}
