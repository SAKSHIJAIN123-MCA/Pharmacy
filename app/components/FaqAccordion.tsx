"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How can I order medicines online from Rabhas Enterprises?",
    answer:
      "Ordering from Rabhas Enterprises is simple and convenient. Just search for your medicines, add them to your cart, and complete the checkout via our website or app.",
  },
  {
    question: "Is it safe to order medicines online from Rabhas Enterprises?",
    answer:
      "Absolutely. All our medicines are sourced from certified vendors and dispatched following strict quality and safety protocols.",
  },
  {
    question: "How will I be informed if my delivery is delayed?",
    answer:
      "We notify you via SMS, email, or call in case of any delays. You can also track your order status directly from your account.",
  },
  {
    question: "Does Rabhas Enterprises offer express delivery?",
    answer:
      "Yes, express delivery options are available in select locations based on product and delivery slot availability.",
  },
  {
    question: "How can I purchase products from Rabhas Enterprises?",
    answer:
      "Browse products on our website or app, and add them to your cart. For OTC items, no prescription is required.",
  },
  {
    question: "Can I track my order from Rabhas Enterprises?",
    answer:
      "Yes, simply log in and visit the “My Orders” section to view live tracking updates.",
  },
  {
    question: "Does Rabhas Enterprises offer home delivery?",
    answer:
      "Yes, we provide doorstep delivery for both prescription and non-prescription items.",
  },
  {
    question: "Is same-day delivery available?",
    answer:
      "Same-day delivery is offered in select areas depending on item availability and delivery slot capacity.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 py-10 sm:py-12 bg-white">
      <div className="max-w-8xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-center sm:text-left">
          Frequently asked questions
        </h2>
        <div className="divide-y divide-gray-700 border-t border-b border-gray-700">
          {visibleFaqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center py-4 sm:py-5 text-left text-base sm:text-lg font-medium"
              >
                <span className="flex-1 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="pb-4 text-sm sm:text-base text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Show more / Show less button */}
        <div className="flex justify-center mt-6 sm:mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-1 text-[#004f3f] border border-[#004f3f] hover:bg-[#004f3f] hover:text-white transition-all px-4 py-2 rounded-md text-sm sm:text-base font-medium"
          >
            {showAll ? "Show less" : "Show more"}
            {showAll ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
