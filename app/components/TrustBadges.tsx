'use client';

import Image from 'next/image';

const badges = [
  {
    src: '/mcafee.png',
    alt: 'McAfee Secure',
    text: 'Original Product',
  },
  {
    src: '/aws.png',
    alt: 'Amazon Web Services',
    text: '24/7 Service',
  },
  {
    src: '/delivery.png',
    alt: 'Fast Delivery',
    text: 'Get Fast Delivery',
  },
  {
    src: '/ssl.png',
    alt: 'SSL Certified',
    text: 'SSL Certified',
  },
  {
    src: '/secured.png',
    alt: 'Secured Packaging',
    text: 'Secured Packaging',
  },
   {
    src: '/lowest price.jpg',
    alt: 'Secured Packaging',
    text: 'Lowest Price',
  },
  {
    src: '/world wide.jpg',
    alt: 'Secured Packaging',
    text: 'World Wide Shipping',
  },
];

export default function TrustBadges() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl font-semibold text-blue-500 mb-10">CERTIFICATIONS</h2>

      {/* Container for the badges */}
      <div className="w-full flex flex-wrap justify-between gap-8">
        {badges.map((badge, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-sm font-medium text-gray-700 flex-grow min-w-[120px]"
          >
            <Image
              src={badge.src}
              alt={badge.alt}
              width={120}
              height={110}
              className="mb-3 object-contain"
            />
            <span className="bg-gray-100 px-3 py-1 rounded text-center whitespace-nowrap">
              {badge.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

