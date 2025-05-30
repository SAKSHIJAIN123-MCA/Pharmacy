import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from "../components/AnimatedSection"; 

export default function CopperBottleArticle() {
  return (
    <AnimatedSection>
    <main className="px-4 sm:px-6 py-10 max-w-5xl mx-auto space-y-8">
      <article>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 leading-tight">
          Copper Bottle: The Healthier and Better Way to Drink Water
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 mb-2">06 June 2022, Updated on 04 October 2023</p>
        <div className="mb-6">
          <Image
            src="/copperbottle.webp"
            alt="Copper Bottle"
            width={600}
            height={400}
            className="rounded-lg w-full h-auto object-cover"
            sizes="(max-width: 640px) 100vw, 600px"
          />
        </div>
        <div className="space-y-4 text-gray-700 text-sm sm:text-base">
          <p>
            Do you drink enough water every day? If not, you should start increasing your water intake!
            Not only is drinking water essential for overall health, but it can also help with weight loss,
            improve skin complexion, and boost energy levels. The benefits of drinking adequate water are many.
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>helps the body to flush out toxins</li>
            <li>helps to regulate body temperature</li>
            <li>keeps the skin healthy and hydrated</li>
            <li>can help to prevent headaches, constipation, and other health problems</li>
          </ul>
          <p>
            Needless to say, drinking water is essential for health and well-being. The best way to drink water is
            from a copper bottle vessel. Copper has many health benefits, and when you drink water from a copper bottle
            vessel, you get all of these benefits and more!
          </p>
          <p>
            Copper is an essential mineral that our bodies need in order to function properly. It helps to flush out
            toxins, regulate body temperature, and keep the skin healthy and hydrated. Therefore, drinking water from
            copper bottle vessels can help to increase our intake of this important mineral.
          </p>
          <p>
            Not only does drinking water from a copper bottle vessel have health benefits, but it also tastes better
            than water that has been sitting in a plastic or glass container. If you are looking for a healthier and
            better-tasting way to drink water, then a copper bottle is recommended.
          </p>
          <p>
            Copper is naturally antibacterial. Copper is effective at killing harmful microorganisms in drinking water,
            making it a healthier and better way to drink water. In addition, drinking from copper vessels has benefits
            such as boosting energy levels and aiding in digestion. When drinking water from copper bottles on a regular
            basis, you can expect to enjoy improved overall health.
          </p>
          <p>
            While there are many benefits of drinking from copper vessels, it is important to note that copper can be
            toxic in high doses. Therefore, it is important to use copper vessels only for drinking water and not for
            storing other liquids such as juices or milk. In addition, it is important to clean the copper vessel
            regularly with lemon and salt to prevent the build-up of copper deposits. When cleaning, use only soft
            materials such as cloth or sponge to avoid scratching the surface of the vessel.
          </p>
          <p>
            If you are looking to improve your overall health then we recommend using a copper bottle to store and drink
            water such as the Apollo Life Copper Bottle, which is available at select Apollo Pharmacy stores and online.
            <br />
            <Link href="/" className="text-blue-600 underline">
              Buy here
            </Link>
          </p>
        </div>
      </article>

      <section className="mt-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Leave Comment</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Name" className="border p-2 rounded w-full" />
            <input type="email" placeholder="Email Id" className="border p-2 rounded w-full" />
          </div>
          <textarea placeholder="Write comment here..." rows={4} className="border p-2 rounded w-full" />
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded w-full sm:w-auto">
            Post Comment
          </button>
        </form>
      </section>

      <section className="mt-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Recommended for you</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "The Surprisingly Interesting History of...",
              href: "#",
              img: "/read1.webp",
            },
            {
              title: "How to maintain hygiene in monsoons",
              href: "#",
              img: "/read2.webp",
            },
            {
              title: "10 Simple Ways to Deal with Stress...",
              href: "#",
              img: "/read3.webp",
            },
          ].map((post, index) => (
            <Link
              key={index}
              href={post.href}
              className="rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <Image
                src={post.img}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
                sizes="(max-width: 640px) 100vw, 400px"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">{post.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
    </AnimatedSection>
  );
}
